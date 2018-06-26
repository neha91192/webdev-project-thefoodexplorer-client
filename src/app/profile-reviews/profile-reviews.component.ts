import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {User} from '../models/user.model.client';
import {ReviewServiceClient} from '../services/review-service-client';

@Component({
  selector: 'app-profile-reviews',
  templateUrl: './profile-reviews.component.html',
  styleUrls: ['./profile-reviews.component.css']
})
export class ProfileReviewsComponent implements OnInit, OnChanges  {

  @Input() user: User;
  @Input() otherUser: User;

  reviews = [];

  userData: User;
  isOtherUserProfile;
  reviewsExist = true;
  constructor(private reviewService: ReviewServiceClient) {
    this.isOtherUserProfile = false;
  }
  ngOnInit() {
    this.isOtherUserProfile = false;
  }

  findReviews () {
    this.reviewService.findAllReviewsForUser(this.userData.userId)
      .then((reviews) => {
        this.reviews = reviews;
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['user'] !== 'undefined') {
      this.userData = this.user;
    } else if (typeof changes['otherUser'] !== 'undefined') {
      this.isOtherUserProfile = true;
      this.userData = this.otherUser;
    }
    // if (this.user.reviews === null) {
    //   this.reviewsExist = false;
    // }

    this.findReviews();
  }

}
