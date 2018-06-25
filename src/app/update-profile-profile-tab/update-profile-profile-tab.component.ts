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
  // dateOfBirth: Date;
  userData: User;
  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['user'] !== 'undefined') {
      this.userData = this.user;
      // const dobArray = this.user.dateOfBirth.split('-');
      // const dateString = dobArray[0] + '/' + dobArray[1] + '/' + dobArray[2];
      // this.dateOfBirth = new Date(dateString);
      // console.log(this.dateOfBirth);
    }
  }

  updateUser() {
    console.log('user date:', this.userData.dateOfBirth);
    // this.userData.dateOfBirth = '11-09-1992';
    this.customerService.updateUser(this.userData)
      .then( () =>
        alert('Profile updated successfully! '));
  }

}
