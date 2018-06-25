import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-profile-reviews',
  templateUrl: './profile-reviews.component.html',
  styleUrls: ['./profile-reviews.component.css']
})
export class ProfileReviewsComponent implements OnInit, OnChanges  {

  @Input() user: User;
  @Input() otherUser: User;

  userData: User;
  isOtherUserProfile;
  constructor() {
    this.isOtherUserProfile = false;
  }
  ngOnInit() {
    this.isOtherUserProfile = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['user'] !== 'undefined') {
      this.userData = this.user;
    } else if (typeof changes['otherUser'] !== 'undefined') {
      this.isOtherUserProfile = true;
      this.userData = this.otherUser;
    }
    console.log('reviews:', this.user.reviews);
  }

}
