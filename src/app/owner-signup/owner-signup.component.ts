import { Component, OnInit } from '@angular/core';
import {ZomatoApiServiceClient} from '../api-services/zomato-api-service-client';
import { PaginationModule } from 'ngx-pagination-bootstrap';
import {Owner} from '../models/owner-model-client';
import {Restaurant} from '../models/restaurant.model.client';

@Component({
  selector: 'app-owner-signup',
  templateUrl: './owner-signup.component.html',
  styleUrls: ['./owner-signup.component.css']
})
export class OwnerSignupComponent implements OnInit {
  entity_type = 'city';
  isActive;
  restaurantList = [];
  restaurantId;
  locationValue = '';
  locationId = 289;
  searchValue = '';
  resultSize;
  noOfPages;
  pagesList;
  currentPage;
  username;
  password;
  confirmPassword;

  constructor(private service: ZomatoApiServiceClient) {
    this.locationId = 289;
    this.isActive = false;
    this.noOfPages = 8;
    this.resultSize = 80;
    this.currentPage = 1;
  }

  ngOnInit() {
    this.locationId = 289;
    this.noOfPages = 8;
    this.resultSize = 80;
    this.currentPage = 1;
  }

  findRestaurants(page) {
    const count = 10;
    if (this.currentPage !== undefined) {
      this.currentPage = page;
    }
    let start = 1;
    if (this.currentPage !== 1) {
      start =  (this.currentPage * 10) + 1;
    }
    this.service.findRestaurants(this.entity_type, this.locationId, this.searchValue, '', '', start , count)
      .then(response => {
        if (response.results_found < 100) {
          this.resultSize = response.results_found;
          this.noOfPages = Math.ceil(this.resultSize / 10);
        } else {
          this.resultSize = 80;
          this.noOfPages = 8;
        }
        this.restaurantList = response.restaurants;
      });
  }

  selectRestaurant(restaurantId) {
    this.isActive = true;
    this.restaurantId = restaurantId;
    console.log(this.restaurantId);

  }

  register() {
    if (this.confirmPassword === this.password) {
      const owner = new Owner();
      owner.username = this.username;
      owner.password = this.password;
      owner.restaurant = new Restaurant();
      owner.restaurant.id = this.restaurantId;
    } else {
      alert ('Passwords do not match!');
    }
  }

  getPageData($event) {
    console.log('Page data');
  }


}
