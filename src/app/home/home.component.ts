import { Component, OnInit } from '@angular/core';
import {ZomatoApiServiceClient} from '../api-services/zomato-api-service-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  latitude;
  longitude;

  userLocation: object;
  locationDetails;
  userCity;

  self;

  constructor(private service: ZomatoApiServiceClient) {
  this.self = this;
    navigator.geolocation.getCurrentPosition(position => {
      this.setLocation(position.coords.latitude, position.coords.longitude);
    });

  }

  setLocation(latitude, longitude) {
    this.service.fetchGeocodeDetails(latitude, longitude)
      .then(locationDetails => {
        this.locationDetails = locationDetails;
        this.userCity = locationDetails.location.city_name;
        console.log(this.locationDetails);
      });

  }

  ngOnInit() {
  }
}
