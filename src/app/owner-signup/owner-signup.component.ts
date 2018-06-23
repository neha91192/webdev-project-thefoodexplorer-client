import { Component, OnInit } from '@angular/core';
import {ZomatoApiServiceClient} from '../api-services/zomato-api-service-client';

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
  username;
  password;
  confirmPassword;
  constructor(private service: ZomatoApiServiceClient) {
    this.locationId = 289;
    this.isActive = false;
    console.log(this.restaurantId);
  }

  ngOnInit() {
    this.locationId = 289;
  }

  findRestaurants() {


    this.service.findRestaurants(this.entity_type, this.locationId, this.searchValue, '', '')
      .then(response => {
        this.restaurantList = response.restaurants;

      });
  }

  selectRestaurant(restaurantId) {
    this.isActive = true;
    this.restaurantId = restaurantId;
    console.log(this.restaurantId);

  }

  register() {
      console.log('register');
  }

}
