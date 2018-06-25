import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {CustomerServiceClient} from '../services/customer-service-client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-update-profile-locations-tab',
  templateUrl: './update-profile-locations-tab.component.html',
  styleUrls: ['./update-profile-locations-tab.component.css']
})
export class UpdateProfileLocationsTabComponent implements OnInit, OnChanges {
  @Input() user: User;

  constructor(private customerService: CustomerServiceClient) {

  }


  userData: User;
  ngOnInit() {
  }

  updateUser(user) {
    this.customerService.updateUser(this.user)
      .then(() =>
        alert('Location updated successfully!'));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['user'] !== 'undefined') {
      this.userData = this.user;
    }
  }


}
