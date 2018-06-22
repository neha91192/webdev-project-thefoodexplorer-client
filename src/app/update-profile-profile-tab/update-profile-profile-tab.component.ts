import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared-service-client';
import {User} from '../models/user.model.client';
import {CustomerServiceClient} from '../services/customer-service-client';

@Component({
  selector: 'app-update-profile-profile-tab',
  templateUrl: './update-profile-profile-tab.component.html',
  styleUrls: ['./update-profile-profile-tab.component.css']
})
export class UpdateProfileProfileTabComponent implements OnInit {

  constructor(private sharedService: SharedService, private customerService: CustomerServiceClient) {
    this.user = this.sharedService.user;
    console.log(this.user);
  }

  user: User;
  ngOnInit() {
  }

  updateUser() {
    this.customerService.updateUser(this.user)
      .then(response =>
      console.log(response));
  }

}
