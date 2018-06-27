import { Component, OnInit } from '@angular/core';
import {ZomatoApiServiceClient} from '../api-services/zomato-api-service-client';
import {Owner} from '../models/owner.model.client';
import {Restaurant} from '../models/restaurant.model.client';
import {OwnerServiceClient} from '../services/owner-service-client';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

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
  selectedRestaurant: Restaurant;
  locations = [];
  locationMap = [];
  selectedLocationId;

  constructor(private service: ZomatoApiServiceClient, private ownerService: OwnerServiceClient,
              private router: Router) {
    this.locationId = 289;
    this.isActive = false;
    this.selectedRestaurant = new Restaurant();
  }

  ngOnInit() {
    this.locationId = 289;
    this.selectedRestaurant = new Restaurant();
  }

  findRestaurants() {
    this.selectedLocationId = '';
    this.locationMap.map(city => {
      if (city.name === this.locationValue) {
        this.selectedLocationId = city.id;
      }
    });
    this.service.findRestaurants(this.entity_type, this.selectedLocationId,
      this.searchValue, '', '', '', '', 1 , 20  )
      .then(response => {
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

  formatter = (result: any) => result;

  fetchLocations = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : this.locations.filter(location =>
          location.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0 , 10)
      ))

  fetchLocationsFromAPI(value: string) {
    this.service.fetchLocation('', value).then((response) => {
      if (response !== null) {
        this.locations = [];
        response.location_suggestions.map(location => {
          this.locations.push(location.name);
          this.locationMap.push({id: location.id, name: location.name});
          // console.log(this.locationMap);
        });
      }
    });
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
