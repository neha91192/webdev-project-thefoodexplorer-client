import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {SharedService} from '../services/shared-service-client';
import {CustomerServiceClient} from '../services/customer-service-client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-update-profile-email-tab',
  templateUrl: './update-profile-email-tab.component.html',
  styleUrls: ['./update-profile-email-tab.component.css']
})
export class UpdateProfileEmailTabComponent implements OnInit, OnChanges {
  @Input() user: User;
  constructor(private sharedService: SharedService, private customerService: CustomerServiceClient) {

  }

  userData: User;
  ngOnInit() {
  }

  updateUser(user) {
    this.customerService.updateUser(this.user)
      .then(response =>
        console.log(response));
  }


  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['user'] !== 'undefined') {
      this.userData = this.user;
    }
  }

}
