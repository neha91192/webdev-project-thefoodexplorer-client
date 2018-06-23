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

  user: User;
  constructor(private sharedService: SharedService, private profileService: ProfileServiceClient) {
    this.fetchProfile();
  }

  fetchProfile() {
    this.profileService.fetchProfile()
      .then(user => {
        this.sharedService.user = user;
        this.user = user;
      });
  }

  ngOnInit() {

  }

}
