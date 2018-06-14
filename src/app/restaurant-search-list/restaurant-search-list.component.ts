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
  restaurants = [];

  constructor(private zomatoService: ZomatoApiServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  setParams(params) {
    this.category = params['searchValue'];
    this.loadRestaurants(this.category);
  }

  loadRestaurants(category) {
    this.zomatoService.findRestaurants('', '', category)
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
