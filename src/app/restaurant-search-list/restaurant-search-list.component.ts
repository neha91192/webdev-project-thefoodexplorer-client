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
  locationId;
  searchKeyword;
  restaurants = [];

  constructor(private zomatoService: ZomatoApiServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  setParams(params) {
    this.location = params['locationId'];
    this.searchKeyword = params['searchValue'];
    if (params['categoryId'] === 'ALL' || params['categoryId'] === undefined) {
      this.category = '';
    } else {
      this.category = params['categoryId'];
    }
    this.loadRestaurants(this.location, this.searchKeyword, this.category);
  }

  loadRestaurants(location, searchKeyword, category) {
    const entity_type = 'city';
    if (location === 'ALL') {
      location = 289;
    } else {
      // this.fetchLocationIdFromAPI(location);
      // location = this.locationId;
      location = 289;
    }
    if (searchKeyword === undefined) {
      searchKeyword = '';
    } else {
      searchKeyword = decodeURI(searchKeyword);
     // console.log(searchKeyword);
    }

    console.log(entity_type);
    console.log(location);
    console.log(searchKeyword);
    console.log(category);

    this.zomatoService.findRestaurants(entity_type, location, searchKeyword, category)
      .then(response => {
        this.restaurants = response.restaurants;
        // console.log(response);
        // console.log(response.restaurants);
        // response.restaurants.map(restaurant => console.log(restaurant.restaurant.name));

      });

  }

  fetchLocationIdFromAPI(location) {
     this.zomatoService.fetchLocation(location)
      .then(locationDetails => this.locationId = locationDetails.id);
  }
  ngOnInit() {

  }


}
