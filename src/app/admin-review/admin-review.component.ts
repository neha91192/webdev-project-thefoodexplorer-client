import { Component, OnInit } from '@angular/core';
import {ReviewServiceClient} from '../services/review-service-client';
import {ProfileServiceClient} from '../services/profile-service-client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-review',
  templateUrl: './admin-review.component.html',
  styleUrls: ['./admin-review.component.css']
})
export class AdminReviewComponent implements OnInit {

  reviews = [];
  constructor(private reviewService: ReviewServiceClient, private profile: ProfileServiceClient,
              private router: Router) { }

  ngOnInit() {
    this.fetchProfile();
  }
  allReviews() {
    this.reviewService.findAllReviews()
      .then( (response) =>
        this.reviews = response);
  }

  deleteReview(review) {
    if (confirm('Are you sure you want to delete this Review?')) {
      this.reviewService
        .deleteReview(review)
        .then( () => this.allReviews());
    }
  }

  fetchProfile() {
    this.profile.fetchProfile().then(user => {
      if (user === null || (user !== null && user.userType !== 'Admin')) {
        alert('You are not authorized to see this page');
        this.router.navigate(['home']);
      }
    }).then(() =>  this.allReviews());
  }

}
