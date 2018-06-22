import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared-service-client';
import {CustomerServiceClient} from '../services/customer-service-client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private sharedService: SharedService, private customerService: CustomerServiceClient) {
    this.user = this.sharedService.user;
  }
  user: User;
  updateProfile = true;
  updatePassword = false;
  updateEmail = false;
  updateLocations = false;
  updateFriends = false;
  updatePrivacySettings = false;

  ngOnInit() {
  }

  showUpdateProfile() {
    this.updateProfile = true;
    this.updatePassword = false;
    this.updateEmail = false;
    this.updateLocations = false;
    this.updateFriends = false;
    this.updatePrivacySettings = false;
  }

  showUpdatePassword() {
    this.updateProfile = false;
    this.updatePassword = true;
    this.updateEmail = false;
    this.updateLocations = false;
    this.updateFriends = false;
    this.updatePrivacySettings = false;

  }

  showUpdateEmail() {
    this.updateProfile = false;
    this.updatePassword = false;
    this.updateEmail = true;
    this.updateLocations = false;
    this.updateFriends = false;
    this.updatePrivacySettings = false;
  }

  showUpdateLocations() {
    this.updateProfile = false;
    this.updatePassword = false;
    this.updateEmail = false;
    this.updateLocations = true;
    this.updateFriends = false;
    this.updatePrivacySettings = false;
  }

  showUpdateFriends() {
    this.updateProfile = false;
    this.updatePassword = false;
    this.updateEmail = false;
    this.updateLocations = false;
    this.updateFriends = true;
    this.updatePrivacySettings = false;
  }

  showUpdatePrivacy() {
    this.updateProfile = false;
    this.updatePassword = false;
    this.updateEmail = false;
    this.updateLocations = false;
    this.updateFriends = false;
    this.updatePrivacySettings = true;
  }

}
