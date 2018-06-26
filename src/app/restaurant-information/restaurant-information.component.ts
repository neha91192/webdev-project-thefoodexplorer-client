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
  infoDiag;

  information;

  constructor() {
    console.log(this.restaurant);
    this.mapLink = 'http://maps.google.com/maps?daddr=LATITUDE,LONGITUDE';
  }

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(this.information.location.latitude, this.information.location.longitude),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    const restuarantLatLong = new google.maps.LatLng(this.information.location.latitude, this.information.location.longitude);
    const marker = new google.maps.Marker({
      position: restuarantLatLong,
      map: this.map,
      title: this.information.name
    });
    // this.addMarker(marker, this.information.name, this.information.location.address);

  }

  // addMarker(marker, name, address) {
  //   google.maps.event.addListener(marker, 'click', function (e) {
  //     this.infoDiag = new google.maps.InfoWindow();
  //     this.infoDiag.setContent('<div style = "width:200px;min-height:40px">' + '<h5>' + name + '</h5>' + address + '</div>');
  //     this.infoDiag.open(this.map, marker);
  //   });
  // }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['restaurant'] !== 'undefined') {
      this.information = this.restaurant;
      this.directionsLink = this.mapLink.replace('LATITUDE', this.information.location.latitude)
        .replace('LONGITUDE', this.information.location.longitude);
      console.log(this.information);
    }
  }

}

