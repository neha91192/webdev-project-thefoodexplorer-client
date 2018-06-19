import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {ZomatoApiServiceClient} from '../services/zomato-api-service-client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-search-panel',
  templateUrl: './main-search-panel.component.html',
  styleUrls: ['./main-search-panel.component.css']
})
export class MainSearchPanelComponent implements OnInit {

  locations = [{id: '289', name: 'Boston'}, {id: '', name: 'Chicago'},
    {id: '', name: 'Denver'}, {id: '', name: 'New York City'}];
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
        location['name'].toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0 , 10)
    ))

  /**
   * Finds list of restaurant categories
   */
  fetchCategoriesFromAPI() {
    this.service.fetchCategories()
      .then(response => {
        response.categories.map(category => this.categories.push(category.categories));
          // console.log(this.categories);
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

  search() {
    this.router.navigate(['/search'], { queryParams: { location: this.selectedLocationId,
        category: this.selectedCategoryId, value: this.searchValue}, queryParamsHandling: 'merge' });

  }

  /**
   * Initializes default value
   */
  ngOnInit() {
    this.selectedCategoryId = 'ALL';
    this.selectedLocationId = 289;
    this.locationValue = 'Boston';
    this.searchValue = '';
  }

}
