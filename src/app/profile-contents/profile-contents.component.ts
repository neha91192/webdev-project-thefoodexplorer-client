import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {isBoolean} from 'util';

@Component({
  selector: 'app-profile-contents',
  templateUrl: './profile-contents.component.html',
  styleUrls: ['./profile-contents.component.css']
})
export class ProfileContentsComponent implements OnInit {

  constructor(private router: Router) { }

  profileOverview = true;
  isSelected = false;
  profileFriends = false;
  profileReviews = false;
  profileFollowers = false;
  profilefollowing = false;
  profileInterests = false;
  ngOnInit() {
  }
  showProfileOverview() {
    if (!this.profileOverview) {
      this.profileOverview = true;
      this.profileFriends = false;
      this.profileReviews = false;
      this.profileFollowers = false;
      this.profilefollowing = false;
      this.profileInterests = false;
    }
    this.router.navigate(['/profile_overview']);


  }
  showProfileFriends() {
    if (!this.profileFriends) {
      this.profileOverview = false;
      this.profileFriends = true;
      this.profileReviews = false;
      this.profileFollowers = false;
      this.profilefollowing = false;
      this.profileInterests = false;
    }
    this.router.navigate(['/profile']);
  }

  showProfileReviews() {
    if (!this.profileReviews) {
      this.profileOverview = false;
      this.profileFriends = false;
      this.profileReviews = true;
      this.profileFollowers = false;
      this.profilefollowing = false;
      this.profileInterests = false;
    }
  }

  showProfileFollowers() {
    if (!this.profileFollowers) {
      this.profileOverview = false;
      this.profileFriends = false;
      this.profileReviews = false;
      this.profileFollowers = true;
      this.profilefollowing = false;
      this.profileInterests = false;
    }
  }

  showProfileFollowing() {
    if (!this.profilefollowing) {
      this.profileOverview = false;
      this.profileFriends = false;
      this.profileReviews = false;
      this.profileFollowers = false;
      this.profilefollowing = true;
      this.profileInterests = false;
    }
  }

  showProfileInterests() {
    if (!this.profileInterests) {
      this.profileOverview = false;
      this.profileFriends = false;
      this.profileReviews = false;
      this.profileFollowers = false;
      this.profilefollowing = false;
      this.profileInterests = true;
    }
  }
}
