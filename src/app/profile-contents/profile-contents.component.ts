import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {isBoolean} from 'util';
import {SharedService} from '../services/shared-service-client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-profile-contents',
  templateUrl: './profile-contents.component.html',
  styleUrls: ['./profile-contents.component.css']
})
export class ProfileContentsComponent implements OnInit, OnChanges {

  @Input() user: User;
  @Input() otherUser: User;
  userData: User;
  isOtherUserProfile;

  constructor(private router: Router) {
    this.isOtherUserProfile = false;
  }

  profileOverview = true;
  isSelected = false;
  profileFriends = false;
  profileReviews = false;
  profileFollowers = false;
  profilefollowing = false;
  profileInterests = false;
  discoverPeople = false;
  ngOnInit() {
    this.isOtherUserProfile = false;
  }

  discoverPeopleTab() {
    this.profileOverview = false;
    this.profileFriends = false;
    this.profileReviews = false;
    this.profileFollowers = false;
    this.profilefollowing = false;
    this.profileInterests = false;
    this.discoverPeople = true;
  }
  showProfileOverview() {
    if (!this.profileOverview) {
      this.profileOverview = true;
      this.profileFriends = false;
      this.profileReviews = false;
      this.profileFollowers = false;
      this.profilefollowing = false;
      this.profileInterests = false;
      this.discoverPeople = false;

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
      this.discoverPeople = false;
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
      this.discoverPeople = false;
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
      this.discoverPeople = false;
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
      this.discoverPeople = false;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['user'] !== 'undefined') {
      this.userData = this.user;
    }
    if (typeof changes['otherUser'] !== 'undefined') {
      this.isOtherUserProfile = true;
      this.userData = this.otherUser;
    }
  }
}
