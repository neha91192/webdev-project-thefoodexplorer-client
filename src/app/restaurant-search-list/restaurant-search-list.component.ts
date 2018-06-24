import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ZomatoApiServiceClient} from '../api-services/zomato-api-service-client';
import { ViewChild } from '@angular/core';

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
  cuisine;
  entity_type;
  sort;
  order;

  restaurants = [];
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor(private zomatoService: ZomatoApiServiceClient, private route: ActivatedRoute) {
    // this.route.params.subscribe(params => this.setParams(params));
    this.entity_type = 'city';
    this.route.queryParams.subscribe(params => this.setParams(params));


  }

  setParams(params) {
    this.location = params['locationId'];
    this.searchKeyword = params['value'];
    this.category = params['categoryId'];

    if (params['cuisine'] !== undefined) {
      this.cuisine = params['cuisine'];
    } else {
      this.cuisine = '';
    }

    if (params['sort'] !== undefined) {
      this.sort = params['sort'];
    } else {
      this.sort = '';
    }
    if (params['order'] !== undefined) {
      this.order = params['order'];
    } else {
      this.order = '';
    }


    this.loadRestaurants(this.location, this.searchKeyword, this.category, this.cuisine, this.sort, this.order);
  }

  loadRestaurants(location, searchKeyword, category, cuisine, sort, order) {

    this.location = location;
    this.searchKeyword = decodeURI(searchKeyword);
    this.category = category;
    this.cuisine = cuisine;
    this.sort = sort;
    this.order = order;


    console.log(location);
    console.log(searchKeyword);
    console.log(category);
    console.log(cuisine);
    console.log(sort);

    this.zomatoService.findRestaurants(this.entity_type, location, searchKeyword, category, cuisine, sort, order, '', '')
      .then(response => {
        this.restaurants = response.restaurants;
        console.log(response);
        // console.log(response.restaurants);
        // response.restaurants.map(restaurant => console.log(restaurant.restaurant.name));

      });

  }

  fetchLocationIdFromAPI(location) {
     this.zomatoService.fetchLocation(location)
      .then(locationDetails => this.locationId = locationDetails.id);
  }
  ngOnInit() {

    this.category = '';
    this.searchKeyword = '';
  }


}
