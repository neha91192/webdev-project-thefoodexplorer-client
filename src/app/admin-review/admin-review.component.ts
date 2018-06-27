import { Component, OnInit } from '@angular/core';
import {ReviewServiceClient} from '../services/review-service-client';

@Component({
  selector: 'app-admin-review',
  templateUrl: './admin-review.component.html',
  styleUrls: ['./admin-review.component.css']
})
export class AdminReviewComponent implements OnInit {

  constructor(private reviewService: ReviewServiceClient) { }

  ngOnInit() {
  }

  deleteReview(review) {
    if (confirm('Are you sure you want to delete this Review?')) {
      this.reviewService
        .deleteReview(review);
    }
  }
}
