import { Component, OnInit } from '@angular/core';
import {ZomatoApiServiceClient} from '../api-services/zomato-api-service-client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-restaurant-details-page',
  templateUrl: './restaurant-details-page.component.html',
  styleUrls: ['./restaurant-details-page.component.css']
})
export class RestaurantDetailsPageComponent implements OnInit {
  restaurantId;
  restaurant;

  constructor(private zomatoService: ZomatoApiServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));

  }

  setParams(params) {
    this.restaurantId = params['restaurantId'];
    this.fetchRestaurant(this.restaurantId);
  }

  fetchRestaurant(restaurantId) {
    this.restaurantId = restaurantId;
    this.zomatoService.fetchRestaurant(restaurantId)
      .then(restaurant => this.restaurant = restaurant);
  }
  ngOnInit() {
  }

}
