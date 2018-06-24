import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {CustomerServiceClient} from '../services/customer-service-client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-profile-discover-people',
  templateUrl: './profile-discover-people.component.html',
  styleUrls: ['./profile-discover-people.component.css']
})
export class ProfileDiscoverPeopleComponent implements OnInit, OnChanges {
  @Input() user: User;

  userData: User;
  constructor(private customerService: CustomerServiceClient) {
    this.firstName = '';
    this.lastName = '';
  }

  firstName;
  lastName;
  users = [];
  ngOnInit() {
  }
  searchUsers() {
    this.customerService.searchUsers(this.firstName, this.lastName)
      .then(response => {
        console.log('customer:', response);
        this.users = response;
        console.log('users:', this.users);
      });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['user'] !== 'undefined') {
      this.userData = this.user;
    }
  }

  follow(userId) {
    // console.log('inside follow');
    this.customerService
      .followUsers(userId);
  }
}
