import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from '../services/shared-service-client';
import {ProfileServiceClient} from '../services/profile-service-client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userType;
  user: User;
  constructor(private sharedService: SharedService, private profileService: ProfileServiceClient) {
    this.userType = this.sharedService.user.userType;
    let userTypeParam;
    if (this.userType === 'Customer') {
      userTypeParam = 'customer';
    } if (this.userType === 'Blogger') {
      userTypeParam = 'blogger';
    } if (this.userType === 'Owner') {
      userTypeParam = 'owner';
    }
    this.fetchProfile(userTypeParam);
  }

  fetchProfile(userType) {
    this.profileService.fetchProfile(userType)
      .then(user => this.user = user);
  }

  ngOnInit() {

  }

}
