import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from '../models/user.model.client';
import {CustomerServiceClient} from '../services/customer-service-client';

@Component({
  selector: 'app-update-profile-profile-tab',
  templateUrl: './update-profile-profile-tab.component.html',
  styleUrls: ['./update-profile-profile-tab.component.css']
})
export class UpdateProfileProfileTabComponent implements OnInit, OnChanges {
  @Input() user: User;
  constructor( private customerService: CustomerServiceClient) {

  }
  userData: User;
  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['user'] !== 'undefined') {
      this.userData = this.user;
    }
  }

  updateUser() {
    this.customerService.updateUser(this.userData)
      .then( () =>
        alert('Profile updated successfully! '));
  }

}
