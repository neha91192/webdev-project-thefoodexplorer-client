import { Component, OnInit } from '@angular/core';
import {ZomatoApiServiceClient} from '../api-services/zomato-api-service-client';
import {Owner} from '../models/owner.model.client';
import {Restaurant} from '../models/restaurant.model.client';
import {OwnerServiceClient} from '../services/owner-service-client';
import {Router} from '@angular/router';

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
  // resultSize;
  noOfPages;
  pagesList;
  currentPage;
  username;
  password;
  confirmPassword;
  selectedRestaurant: Restaurant;

  constructor(private service: ZomatoApiServiceClient, private ownerService: OwnerServiceClient,
              private router: Router) {
    this.locationId = 289;
    this.isActive = false;
   // this.noOfPages = 8;
    // this.resultSize = 80;
   // this.currentPage = 1;
    this.selectedRestaurant = new Restaurant();
    // this.restaurantId = 16774318;
  }

  ngOnInit() {
    this.locationId = 289;
   // this.noOfPages = 8;
    // this.resultSize = 80;
    // this.currentPage = 1;
    this.selectedRestaurant = new Restaurant();
  }

  findRestaurants() {
    // const count = 10;
    // if (this.currentPage !== undefined) {
    //   this.currentPage = page;
    // }
    // let start = 1;
    // if (this.currentPage !== 1) {
    //   start =  (this.currentPage * 10) + 1;
    // }
    this.service.findRestaurants(this.entity_type, this.locationId,
      this.searchValue, '', '', '', '', 1 , 20  )
      .then(response => {
        // if (response.results_found < 100) {
        //   this.resultSize = response.results_found;
        //   this.noOfPages = Math.ceil(this.resultSize / 10);
        // } else {
        //   this.resultSize = 80;
        //   this.noOfPages = 8;
        // }
        this.restaurantList = response.restaurants;
      });
  }

  selectRestaurant(restaurant) {
    this.isActive = true;
    // this.selectedRestaurant = new Restaurant();
    this.selectedRestaurant.restaurantId = restaurant.restaurant.id;
    this.selectedRestaurant.name =  restaurant.restaurant.name;
    this.selectedRestaurant.locationArea = restaurant.restaurant.location.locality_verbose;

    console.log(this.restaurantId);

  }

  register() {
    if (this.confirmPassword === this.password) {
      const owner = new Owner();
      owner.username = this.username;
      owner.password = this.password;
      owner.restaurant = new Restaurant();
      owner.restaurant = this.selectedRestaurant;
      owner.userType = 1;
      this.ownerService.register(owner).then(response => {
        if (response === 409) {
          alert('This restaurant has already been claimed. Please contact system administrator for more information');
        } else {
          if (response === 400) {
            alert('Cannot process request, system failure');
          } else {
            alert('Congrats! Your restaurant has been listed on our website.');
            this.router.navigate(['profile/owner']);
          }
        }
      });
    } else {
      alert ('Passwords do not match!');
    }
  }

  // getPageData($event) {
  //   console.log('Page data');
  // }


}
