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

  userData: User;
  showDelete = false;
  following = [];
  constructor(private customerService: CustomerServiceClient) { }

  ngOnInit() {
    this.findFollowing();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['user'] !== 'undefined') {
      this.userData = this.user;
    }
  }
  findFollowing() {
    this.customerService
      .findFollowing()
      .then((response) => {
        this.following = response;
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
