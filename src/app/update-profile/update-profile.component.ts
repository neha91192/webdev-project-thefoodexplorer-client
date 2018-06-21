import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor() { }

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
