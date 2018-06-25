import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {User} from '../models/user.model.client';
import {CustomerServiceClient} from '../services/customer-service-client';

@Component({
  selector: 'app-profile-following',
  templateUrl: './profile-following.component.html',
  styleUrls: ['./profile-following.component.css']
})
export class ProfileFollowingComponent implements OnInit, OnChanges {
  @Input() user: User;
  @Input() otherUser: User;

  userData: User;
  isOtherUserProfile;
  showDelete = false;
  following = [];
  constructor(private customerService: CustomerServiceClient) {
    this.isOtherUserProfile = false;
  }

  ngOnInit() {
    this.isOtherUserProfile = false;
    this.findFollowing();
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
  findFollowing() {
    this.customerService
      .findFollowing()
      .then((response) => {
        this.following = response;
      });
  }

  unfollow(userId) {
    if (confirm('Are you sure you want to unfollow?')) {
      this.customerService
        .unfollow(userId)
        .then( (response) => {
          this.findFollowing();
        });
    }
  }
}
