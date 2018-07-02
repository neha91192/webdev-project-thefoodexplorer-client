import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-home-popularity-index',
  templateUrl: './home-popularity-index.component.html',
  styleUrls: ['./home-popularity-index.component.css']
})
export class HomePopularityIndexComponent implements OnInit, OnChanges {

  @Input() locationDetails: object;
  locationData;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['locationDetails'] !== 'undefined') {
      this.locationData = this.locationDetails;


    }
  }

}
