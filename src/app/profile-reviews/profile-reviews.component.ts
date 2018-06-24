import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-profile-reviews',
  templateUrl: './profile-reviews.component.html',
  styleUrls: ['./profile-reviews.component.css']
})
export class ProfileReviewsComponent implements OnInit, OnChanges  {

  @Input() user: User;

  userData: User;
  constructor() {
  }
  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['user'] !== 'undefined') {
      this.userData = this.user;
    }
  }

}
