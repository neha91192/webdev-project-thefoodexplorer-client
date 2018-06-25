import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProfileServiceClient} from '../services/profile-service-client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  constructor(private router: Router, private profileService: ProfileServiceClient) {
    this.fetchProfile();
  }

  fetchProfile() {
    this.profileService.fetchProfile()
      .then(user => {
        if (user === null) {
          alert('You are not logged in! Please login to continue.');
          this.router.navigate(['home']);
        } else {
          this.user = user;
        }
      });
  }

  ngOnInit() {

  }

}
