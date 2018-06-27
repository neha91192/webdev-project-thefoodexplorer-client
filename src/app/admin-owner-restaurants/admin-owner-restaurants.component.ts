import { Component, OnInit } from '@angular/core';
import {OwnerServiceClient} from '../services/owner-service-client';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user-service-client';
import {Owner} from '../models/owner.model.client';

import {Restaurant} from '../models/restaurant.model.client';
import {ProfileServiceClient} from '../services/profile-service-client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-owner-restaurants',
  templateUrl: './admin-owner-restaurants.component.html',
  styleUrls: ['./admin-owner-restaurants.component.css']
})
export class AdminOwnerRestaurantsComponent implements OnInit {

  constructor(private ownerService: OwnerServiceClient, private userService: UserServiceClient,
              private profile: ProfileServiceClient,
              private router: Router) { }

  restaurantName;
  restaurantLocation;
  username;
  password;
  restaurantId;
  firstName;
  originalPassword;
  isEdit;

  owners = [];
  owner: Owner;
  user: User;
  ngOnInit() {
    this.fetchProfile();
  }

  findAllOwners() {
    this.ownerService.findAllOwners()
      .then((response) => {
        this.owners = response;
        console.log('all owners:', response);
      });
  }

  deleteOwner(ownerId) {
    if (confirm('Are you sure you want to delete this owner?')) {
      this.ownerService
        .deleteOwner(ownerId)
        .then((response) => {
          console.log('delete user:', response);
          alert('Owner deleted successfully!');
          this.findAllOwners();
        });
        // .then(() => this.findAllOwners());
    }
  }

  updateUser() {
    this.user.password = this.password;
    this.user.username = this.username;
    this.user.firstName = this.firstName;
    this.user.userType = 1;
    this.userService
      .updateUser(this.user)
      .then((response) => {
        if (this.originalPassword !== this.password) {
          this.userService.updatePassword(this.user)
            .then(() => {
              alert('User Updated');
              this.username = '';
              this.password = '';
              this.firstName = '';
              this.restaurantName = '';
              this.restaurantLocation = '';
              this.restaurantId = '';
              this.findAllOwners();
            });
        } else {
          alert('User Updated');
          this.username = '';
          this.password = '';
          this.firstName = '';
          this.restaurantName = '';
          this.restaurantLocation = '';
          this.restaurantId = '';
          this.findAllOwners();
        }
      });
  }

  createUser() {
    this.owner = new Owner();
    this.owner.firstName = this.firstName;
    this.owner.username = this.username;
    this.owner.password = this.password;
    this.owner.userType = 1;
    this.owner.restaurant = new Restaurant();
    this.owner.restaurant.name = this.restaurantName;
    this.owner.restaurant.locationArea = this.restaurantLocation;
    this.owner.restaurant.restaurantId = this.restaurantId;

    console.log(this.owner);

    this.ownerService.createOwner(this.owner)
      .then(() => {
        alert('Owner created successfully');
        this.findAllOwners();
      });

  }

  renderUser(user) {
    this.isEdit = true;
    this.username = user.username;
    this.firstName = user.firstName;
    this.originalPassword = user.password;
    this.password = user.password;
    this.restaurantId = user.restaurant.restaurantId;
    this.restaurantName = user.restaurant.name;
    this.restaurantLocation = user.restaurant.locationArea;
    this.user = user;

  }

  fetchProfile() {
    this.profile.fetchProfile().then(user => {
      if (user === null || (user !== null && user.userType !== 'Admin')) {
        alert('You are not authorized to see this page');
        this.router.navigate(['home']);
      }
    }).then(() => this.findAllOwners());
  }


}
