import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProfileServiceClient} from '../services/profile-service-client';
import {Owner} from '../models/owner.model.client';
import {OwnerServiceClient} from '../services/owner-service-client';

@Component({
  selector: 'app-owner-profile',
  templateUrl: './owner-profile.component.html',
  styleUrls: ['./owner-profile.component.css']
})
export class OwnerProfileComponent implements OnInit {

  user: Owner;
  constructor(private router: Router,
              private profileService: ProfileServiceClient,
              private ownerService: OwnerServiceClient) {
    this.fetchProfile();
  }

  showCity = true;
  ngOnInit() {
  }

  fetchProfile() {
    this.profileService.fetchProfile()
      .then(user => {
        if (user === null) {
          alert('You are not logged in! Please login to continue.');
          this.router.navigate(['home']);
        } else {
          this.user = user;
          if ((this.user.city === null) || (this.user.city === '')) {
            this.showCity = false;
          }
        }
      });
    console.log('owner user:', this.user);

  }

  update() {
    this.ownerService.
      updateOwner(this.user)
      .then((response) => {
        alert('Owner updated successfully!');
        console.log('owner:', response);
      });
  }

  // goToRestaurantPage() {
  //
  // }

}
