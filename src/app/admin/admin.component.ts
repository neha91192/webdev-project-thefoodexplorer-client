import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user-service-client';
import {User} from '../models/user.model.client';
import {ProfileServiceClient} from '../services/profile-service-client';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserServiceClient, private profile: ProfileServiceClient,
              private router: Router) {
    // this.fetchProfile();
  }
  users = [];
  username;
  password;
  firstName;
  lastName;
  userType;
  user: User;

  ngOnInit() {
    this.fetchProfile();
    // this.findAllUsers();
  }

  findAllUsers() {
    this.userService.findAllUsers()
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
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.user.userType = this.userType;
    this.userService
      .updateUser(this.user)
      .then((response) => {
        alert('User Updated');
        this.username = '';
        this.password = '';
        this.firstName = '';
        this.lastName = '';
      })
      .then( () => this.findAllUsers());
  }

  renderUser(user) {
    this.username = user.username;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.userType = user.userType;
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

}
