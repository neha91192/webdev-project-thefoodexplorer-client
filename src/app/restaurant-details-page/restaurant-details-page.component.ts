import { Component, OnInit } from '@angular/core';
import {ZomatoApiServiceClient} from '../api-services/zomato-api-service-client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-restaurant-details-page',
  templateUrl: './restaurant-details-page.component.html',
  styleUrls: ['./restaurant-details-page.component.css']
})
export class RestaurantDetailsPageComponent implements OnInit {
  restaurantId;
  restaurant;
  reviewRating;

  // Tab selection variables
  isInfoTabClicked;
  isMenuTabClicked;
  isReviewTabClicked;
  isReservationTabClicked;

  constructor(private zomatoService: ZomatoApiServiceClient, private route: ActivatedRoute, config: NgbRatingConfig) {
    config.max = 5;
    this.route.params.subscribe(params => this.setParams(params));
    this.isInfoTabClicked = true;
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
    this.isInfoTabClicked = true;
  }

  selectTab(value) {
    if (value === 'info') {
      this.isInfoTabClicked = true;
      this.isMenuTabClicked = false;
      this.isReviewTabClicked = false;
      this.isReservationTabClicked = false;
    }
    if (value === 'menu') {
      this.isInfoTabClicked = false;
      this.isMenuTabClicked = true;
      this.isReviewTabClicked = false;
      this.isReservationTabClicked = false;
    }
    if (value === 'review') {
      this.isInfoTabClicked = false;
      this.isMenuTabClicked = false;
      this.isReviewTabClicked = true;
      this.isReservationTabClicked = false;
    }
    if (value === 'reservation') {
      this.isInfoTabClicked = false;
      this.isMenuTabClicked = false;
      this.isReviewTabClicked = false;
      this.isReservationTabClicked = true;
    }

  }

}
