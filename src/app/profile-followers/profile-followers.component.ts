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

  userData: User;
  showDelete = false;
  followers = [];
  constructor(private customerService: CustomerServiceClient) { }

  ngOnInit() {
    this.findFollowers();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['user'] !== 'undefined') {
      this.userData = this.user;
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
  unfollow(userId) {
    this.customerService
      .unfollow(userId);
    // .then( (response) =>
    // console.log(response));
  }

}
