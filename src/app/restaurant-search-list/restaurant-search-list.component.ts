import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ZomatoApiServiceClient} from '../services/zomato-api-service-client';

@Component({
  selector: 'app-restaurant-search-list',
  templateUrl: './restaurant-search-list.component.html',
  styleUrls: ['./restaurant-search-list.component.css']
})
export class RestaurantSearchListComponent implements OnInit {

  category;
  location;
  searchKeyword;
  restaurants = [];

  constructor(private zomatoService: ZomatoApiServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  setParams(params) {
    this.location = params['locationValue'];
    this.searchKeyword = params['searchValue'];
    if (params['categoryId'] === '0') {
      this.category = '';
    } else {
      this.category = params['categoryId'];
    }
    this.loadRestaurants(this.location, this.searchKeyword, this.category);
  }

  loadRestaurants(location, searchKeyword, category) {
    let entity_type = 'city';

    if (location === '') {
      entity_type = '';
    }
    if (searchKeyword === undefined) {
      searchKeyword = '';
    }
    if (category === undefined) {
      category = '';
    }



    this.zomatoService.findRestaurants(entity_type, location, searchKeyword, category)
      .then(response => {
        this.restaurants = response.restaurants;
        console.log(response);
        console.log(response.restaurants);
        response.restaurants.map(restaurant => console.log(restaurant.restaurant.name));

      });

  }
  ngOnInit() {

  }


}
