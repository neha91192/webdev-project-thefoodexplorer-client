import { Component, OnInit } from '@angular/core';
import {ZomatoApiServiceClient} from '../api-services/zomato-api-service-client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {Review} from '../models/review.model.client';
import {Restaurant} from '../models/restaurant.model.client';
import {ReviewServiceClient} from '../services/review-service-client';

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
  backurl;
  reviewList = [];

  // Tab selection variables
  isInfoTabClicked;
  isMenuTabClicked;
  isReviewTabClicked;
  isReservationTabClicked;

  constructor(private zomatoService: ZomatoApiServiceClient, private reviewService: ReviewServiceClient,
              private route: ActivatedRoute, config: NgbRatingConfig, private router: Router) {
    config.max = 5;
    this.route.params.subscribe(params => this.setParams(params));
    this.isInfoTabClicked = true;
    this.reviewRating = '';

       // this.router.events.map(event => {
    //   if (event instanceof  NavigationEnd) {
    //     return event;
    //   }
    // }).subscribe(e => {
    //   console.log('prev:', this.backurl);
    //   this.backurl = e.url;
    // });

  }

  setParams(params) {
    this.restaurantId = params['restaurantId'];
    this.fetchRestaurant(this.restaurantId);
    this.findAllReviewsForRestaurant();
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

  submitReview() {
    console.log(this.reviewRating);
    console.log(this.reviewContent);
    this.review = new Review();
    this.review.rating = this.reviewRating;
    this.review.content = this.reviewContent;
    this.review.restaurant = new Restaurant();
    this.review.restaurant.restaurantId = this.restaurantId;
    this.reviewService
      .submitReview(this.review)
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
    this.router.navigateByUrl(this.backurl);
  }
}
