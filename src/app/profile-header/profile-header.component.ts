import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../models/user.model.client';
import {SharedService} from '../services/shared-service-client';
import {ProfileServiceClient} from '../services/profile-service-client';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  constructor(private router: Router, private sharedService: SharedService, private profileService: ProfileServiceClient) {
    this.fetchProfile();
  }

  addressNULL = false;
  user: User;
  ngOnInit() {
  }

  fetchProfile() {
    this.profileService.fetchProfile()
      .then(user => {
        this.sharedService.user = user;
        this.user = user;
        this.addressNULL = true;
      });
  }
}
