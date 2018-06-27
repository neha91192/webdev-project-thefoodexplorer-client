import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user-service-client';
import {User} from '../models/user.model.client';
import {ProfileServiceClient} from '../services/profile-service-client';
import {Router, RouterModule} from '@angular/router';
import {CustomerServiceClient} from '../services/customer-service-client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserServiceClient, private profile: ProfileServiceClient,
              private customerService: CustomerServiceClient,
              private router: Router) {
    // this.fetchProfile();
    this.userType = 0;
  }
  users = [];
  username;
  password;
  originalPassword;
  firstName;
  lastName;
  userType;
  user: User;

  ngOnInit() {
    this.fetchProfile();
    this.userType = 0;
    // this.findAllUsers();
  }

  findAllUsers() {
    this.customerService.searchUsers('', '')
      .then((response) => {
        this.users = response;
        console.log(response);
      });
  }

  deleteUser(userId) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService
        .deleteUser(userId)
        .then((response) => this.findAllUsers());
    }
  }

  createUser() {
    this.userService
      .createUser(this.username, this.password, this.firstName, this.lastName, this.userType)
      .then((response) => {
        if (response !== null) {
          alert('User created successfully');
          this.username = '';
          this.password = '';
          this.firstName = '';
          this.lastName = '';
          this.findAllUsers();
        } else {
          alert('User with this username already exists');
        }
      });
  }

  updateUser() {
    console.log(this.password);
    console.log(this.originalPassword);
    this.user.password = this.password;
    this.user.username = this.username;
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.user.userType = this.userType;
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
              this.lastName = '';
              this.findAllUsers();
            });
        } else {
          alert('User Updated');
          this.username = '';
          this.password = '';
          this.firstName = '';
          this.lastName = '';
          this.findAllUsers();
        }
      });
  }

  renderUser(user) {
    this.username = user.username;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    // this.userType = user.userType;
    this.originalPassword = user.password;
    this.password = user.password;
    this.user = user;

  }

  fetchProfile() {
    this.profile.fetchProfile().then(user => {
      if (user === null || (user !== null && user.userType !== 'Admin')) {
        alert('You are not authorized to see this page');
        this.router.navigate(['home']);
      }
    }).then(() => this.findAllUsers());
  }

  ownerPage() {
    this.router.navigate(['admin/owner']);
  }

  reviewPage() {
    this.router.navigate(['admin/review']);
  }

}
