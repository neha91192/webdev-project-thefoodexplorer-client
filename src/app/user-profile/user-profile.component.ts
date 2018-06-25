import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../models/user.model.client';
import {CustomerServiceClient} from '../services/customer-service-client';
import {ProfileServiceClient} from '../services/profile-service-client';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userId;
  otherUser: User;
  user: User;
  constructor(private route: ActivatedRoute, private service: CustomerServiceClient,
              private profile: ProfileServiceClient) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  setParams(params) {
    this.userId = params['userId'];
    this.fetchCurrentUserProfile();
    // this.fetchProfileOfThisUser(this.userId);
  }

  fetchProfileOfThisUser(userId) {
    this.service.findUser(userId).then(user => {
      this.otherUser = user ;
    });
  }

  ngOnInit() {
  }

  fetchCurrentUserProfile() {
    this.profile.fetchProfile().then(user => {
      this.user = user;
      this.fetchProfileOfThisUser(this.userId);
    });
  }

}
