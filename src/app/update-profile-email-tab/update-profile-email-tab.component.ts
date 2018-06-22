import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared-service-client';
import {CustomerServiceClient} from '../services/customer-service-client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-update-profile-email-tab',
  templateUrl: './update-profile-email-tab.component.html',
  styleUrls: ['./update-profile-email-tab.component.css']
})
export class UpdateProfileEmailTabComponent implements OnInit {

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
