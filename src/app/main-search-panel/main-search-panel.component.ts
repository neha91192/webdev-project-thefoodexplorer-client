import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {ZomatoApiServiceClient} from '../api-services/zomato-api-service-client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-search-panel',
  templateUrl: './main-search-panel.component.html',
  styleUrls: ['./main-search-panel.component.css']
})
export class MainSearchPanelComponent implements OnInit {

  locations = [];
  locationMap = [];
  categories = [];
  searchValue;
  selectedCategory: String = 'Categories';
  selectedCategoryId;
  locationValue;
  selectedLocationId;
  constructor(private service: ZomatoApiServiceClient, private router: Router) {
      this.fetchCategoriesFromAPI();
  }

  formatter = (result: any) => result;

  // fetchLocations = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(200),
  //     distinctUntilChanged(),
  //     map(term => term === '' ? []
  //       : this.locations.filter(city => city.name.toLowerCase()
  //         .indexOf(term.toLowerCase()) > -1).slice(0, 10))
  //   )

  /**
   * For typeahead location input dropdown
   * @param {Observable<string>} text$
   * @returns {Observable<any[] | {id: string; name: string}[]>}
   */
  fetchLocations = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : this.locations.filter(location =>
        location.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0 , 10)
    ))

  /**
   * Finds list of restaurant categories
   */
  fetchCategoriesFromAPI() {
    this.service.fetchCategories()
      .then(response => {
        response.categories.map(category => this.categories.push(category.categories));
      });
  }


  /**
   * Listens to change in selected category value from the dropdown
   * @param categoryName
   */
  changeCategoryValue(categoryName) {
    this.selectedCategory = categoryName;
    this.categories.map(category => {
      if (category.name === categoryName) {
        this.selectedCategoryId = category.id;
      }
    });
  }

  fetchLocationsFromAPI(value: string) {
      this.service.fetchLocation(value).then((response) => {
          if (response !== null) {
            response.location_suggestions.map(location => {
              this.locations.push(location.name);
              this.locationMap.push({id: location.id, name: location.name});
              console.log(this.locations);
              console.log(this.locationMap);
            });
          }
      });
  }

  search() {
    this.router.navigate(['/search'], { queryParams: { locationId: this.selectedLocationId,
        categoryId: this.selectedCategoryId, value: this.searchValue}, queryParamsHandling: 'merge' });

  }

  /**
   * Initializes default value
   */
  ngOnInit() {
    this.selectedCategoryId = '';
    this.selectedLocationId = 289;
    // this.locationValue = 'Boston';
    this.searchValue = '';
  }

}
