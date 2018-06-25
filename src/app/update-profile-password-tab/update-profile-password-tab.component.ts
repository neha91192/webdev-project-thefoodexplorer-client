import {Component, OnInit, SimpleChanges, OnChanges, Input} from '@angular/core';
import {CustomerServiceClient} from '../services/customer-service-client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-update-profile-password-tab',
  templateUrl: './update-profile-password-tab.component.html',
  styleUrls: ['./update-profile-password-tab.component.css']
})
export class UpdateProfilePasswordTabComponent implements OnInit, OnChanges {
  @Input() user: User;

  constructor(private customerService: CustomerServiceClient) {

  }

  userData: User;
  password = '';
  confirmPassword = '';
  ngOnInit() {
  }

  updateUser() {
    if (this.password !== this.confirmPassword) {
      alert('passwords do not match');
    } else {
      this.userData.password = this.password;
      console.log('user:', this.user);
      this.customerService.updateUserPassword(this.userData)
        .then(() =>
          alert('Password updated successfully!'));
    }
  }

  clear() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['user'] !== 'undefined') {
      this.userData = this.user;
    }
  }


}
