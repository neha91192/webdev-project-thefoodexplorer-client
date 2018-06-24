import {Component, OnInit} from '@angular/core';
import {CustomerServiceClient} from '../services/customer-service-client';
import {User} from '../models/user.model.client';
import {ProfileServiceClient} from '../services/profile-service-client';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private customerService: CustomerServiceClient,
              private profileService: ProfileServiceClient) {
    this.fetchProfile();
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

  fetchProfile() {
    this.profileService.fetchProfile().then(user => this.user = user);
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
