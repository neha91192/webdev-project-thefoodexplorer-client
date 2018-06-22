import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-information',
  templateUrl: './restaurant-information.component.html',
  styleUrls: ['./restaurant-information.component.css']
})
export class RestaurantInformationComponent implements OnInit, OnChanges {
  @Input() restaurant: object;

  information;

  constructor() {
    console.log(this.restaurant);
  }

  ngOnInit() {
    console.log(this.restaurant);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['restaurant'] !== 'undefined') {
      this.information = this.restaurant;
      console.log(this.information);
    }
  }

}

