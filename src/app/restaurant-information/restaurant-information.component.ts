import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-information',
  templateUrl: './restaurant-information.component.html',
  styleUrls: ['./restaurant-information.component.css']
})
export class RestaurantInformationComponent implements OnInit, OnChanges {
  @Input() restaurant: object;
  mapLink;
  directionsLink;

  information;

  constructor() {
    console.log(this.restaurant);
    this.mapLink = 'http://maps.google.com/maps?daddr=LATITUDE,LONGITUDE';
  }

  ngOnInit() {
    console.log(this.restaurant);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['restaurant'] !== 'undefined') {
      this.information = this.restaurant;
      this.directionsLink = this.mapLink.replace('LATITUDE', this.information.location.latitude)
        .replace('LONGITUDE', this.information.location.longitude);
      console.log(this.information);
    }
  }

}

