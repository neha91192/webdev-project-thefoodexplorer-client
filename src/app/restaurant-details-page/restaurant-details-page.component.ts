import { Component, OnInit } from '@angular/core';
import {ZomatoApiServiceClient} from '../api-services/zomato-api-service-client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {Review} from '../models/review.model.client';
import {Restaurant} from '../models/restaurant.model.client';
import {ReviewServiceClient} from '../services/review-service-client';
import { Location } from '@angular/common';
import { User} from '../models/user.model.client';
import {ProfileServiceClient} from '../services/profile-service-client';

@Component({
  selector: 'app-restaurant-details-page',
  templateUrl: './restaurant-details-page.component.html',
  styleUrls: ['./restaurant-details-page.component.css']
})
export class RestaurantDetailsPageComponent implements OnInit {
  restaurantId;
  restaurant;
  reviewRating;
  reviewContent;
  review: Review;
  reviewList = [];
  isOwner;
  user: User;

  // Tab selection variables
  isInfoTabClicked;
  isMenuTabClicked;
  isReviewTabClicked;
  isReservationTabClicked;

  constructor(private zomatoService: ZomatoApiServiceClient, private reviewService: ReviewServiceClient,
              private route: ActivatedRoute, config: NgbRatingConfig, private router: Router,
              private location: Location, private profile: ProfileServiceClient) {
    config.max = 5;
    this.route.params.subscribe(params => this.setParams(params));
    this.isInfoTabClicked = true;
    this.reviewRating = '';
    this.isOwner = false;

  }

  setParams(params) {
    this.restaurantId = params['restaurantId'];
    this.fetchRestaurant(this.restaurantId);
    this.fetchProfile();
    this.findAllReviewsForRestaurant();
  }

  fetchRestaurant(restaurantId) {
    this.restaurantId = restaurantId;
    this.zomatoService.fetchRestaurant(restaurantId)
      .then(restaurant => this.restaurant = restaurant);
  }
  ngOnInit() {
    this.isInfoTabClicked = true;
    this.isOwner = false;
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

  submitReview() {
    this.review = new Review();
    this.review.rating = this.reviewRating;
    this.review.content = this.reviewContent;
    this.review.restaurant = new Restaurant();
    this.review.restaurant.name = this.restaurant.name;
    this.review.restaurant.locationArea = this.restaurant.location.locality_verbose;

    // this.review.customer = new User();

    console.log(JSON.stringify(this.review));


    this.reviewService
      .submitReview(this.review, this.restaurantId)
      .then((response) => {
        if (response === null) {
          alert ('You are not logged in. Please login to continue');
          this.router.navigate(['home']);
        } else {
          this.reviewContent = '';
          this.reviewRating = '';
          alert ('Review added successfully');
          this.findAllReviewsForRestaurant();
        }
      }
       ).then((response) =>
        console.log(response));

  }

  findAllReviewsForRestaurant() {
    this.reviewService
      .findAllReviewsForRestaurant(this.restaurantId)
      .then(response => {
        this.reviewList = response;
        console.log(this.reviewList);
      });
  }
  back() {
    this.location.back();
  }

  fetchProfile() {
    this.profile.fetchProfile().then(user => {
      if (user !== null) {
        if (user.userType === 'Owner') {
          this.isOwner = true;
        }
        this.user = user;
      }
      });
  }
}
