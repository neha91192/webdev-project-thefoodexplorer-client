import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared-service-client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.css']
})
export class ProfileOverviewComponent implements OnInit {

  constructor(private sharedService: SharedService) {
    this.user = this.sharedService.user;
  }
  user: User;
  ngOnInit() {
  }

}
