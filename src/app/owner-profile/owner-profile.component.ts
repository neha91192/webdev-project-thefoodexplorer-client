import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProfileServiceClient} from '../services/profile-service-client';
import {Owner} from '../models/owner.model.client';

@Component({
  selector: 'app-owner-profile',
  templateUrl: './owner-profile.component.html',
  styleUrls: ['./owner-profile.component.css']
})
export class OwnerProfileComponent implements OnInit {

  isValid;
  user: Owner;
  constructor(private router: Router, private profileService: ProfileServiceClient) {
    this.fetchProfile();
  }

  ngOnInit() {
    this.isValid = false;
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
    console.log('owner user:', this.user);
  }

  // goToRestaurantPage() {
  //
  // }



}
