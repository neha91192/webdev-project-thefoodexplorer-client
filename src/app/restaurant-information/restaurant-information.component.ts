import {Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild} from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-restaurant-information',
  templateUrl: './restaurant-information.component.html',
  styleUrls: ['./restaurant-information.component.css']
})
export class RestaurantInformationComponent implements OnInit, OnChanges {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  @Input() restaurant: object;
  mapLink;
  directionsLink;

  information;

  constructor() {
    console.log(this.restaurant);
    this.mapLink = 'http://maps.google.com/maps?daddr=LATITUDE,LONGITUDE';
  }

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(this.information.location.latitude, this.information.location.longitude),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
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

