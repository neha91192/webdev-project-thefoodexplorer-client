import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../models/user.model.client';
import {SharedService} from '../services/shared-service-client';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  constructor(private router: Router, private sharedService: SharedService) {
    this.user = this.sharedService.user;
  }

  user: User;
  ngOnInit() {
  }
}
