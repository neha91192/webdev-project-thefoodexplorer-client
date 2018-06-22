import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared-service-client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-profile-reviews',
  templateUrl: './profile-reviews.component.html',
  styleUrls: ['./profile-reviews.component.css']
})
export class ProfileReviewsComponent implements OnInit {

  constructor(private sharedService: SharedService) {
    this.user = this.sharedService.user;
  }

  user: User;
  ngOnInit() {
  }

}
