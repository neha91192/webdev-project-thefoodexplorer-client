import {Component, OnInit, SimpleChanges, OnChanges, Input} from '@angular/core';
import {User} from '../models/user.model.client';
import {CustomerServiceClient} from '../services/customer-service-client';

@Component({
  selector: 'app-profile-followers',
  templateUrl: './profile-followers.component.html',
  styleUrls: ['./profile-followers.component.css']
})
export class ProfileFollowersComponent implements OnInit, OnChanges {
  @Input() user: User;
  @Input() otherUser: User;

  userData: User;
  isOtherUserProfile;
  showDelete = false;
  followers = [];
  constructor(private customerService: CustomerServiceClient) {
    this.isOtherUserProfile = false;
  }

  ngOnInit() {
    this.isOtherUserProfile = false;
    this.findFollowers();
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
  findFollowers() {
    this.customerService
      .findFollowers()
      .then((response) => {
        this.followers = response;
      console.log(response);
      });
  }
}
