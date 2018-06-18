import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {ZomatoApiServiceClient} from '../services/zomato-api-service-client';

@Component({
  selector: 'app-main-search-panel',
  templateUrl: './main-search-panel.component.html',
  styleUrls: ['./main-search-panel.component.css']
})
export class MainSearchPanelComponent implements OnInit {

  locations = [{id: '289', name: 'Boston'}, {id: '', name: 'Chicago'}, {id: '', name: 'Denver'}, {id: '', name: 'New York City'}];
  categories = [];
  searchValue: '';
  selectedCategory: String = 'Categories';
  selectedCategoryId;
  locationValue;
  selectedLocationId;
  constructor(private service: ZomatoApiServiceClient) {
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

  fetchLocations = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : this.locations.filter(location =>
        location['name'].toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0 , 10)
    ))

  fetchCategoriesFromAPI() {
    this.service.fetchCategories()
      .then(response => {
        response.categories.map(category => this.categories.push(category.categories));
          // console.log(this.categories);
      });
  }



  changeCategoryValue(categoryName) {
    this.selectedCategory = categoryName;
    this.categories.map(category => {
      if (category.name === categoryName) {
        this.selectedCategoryId = category.id;
      }
    });
  }

  ngOnInit() {
    this.selectedCategoryId = 'ALL';
    this.selectedLocationId = 'ALL';
  }

}
