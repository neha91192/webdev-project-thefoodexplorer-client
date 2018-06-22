import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared-service-client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  constructor(private sharedService: SharedService) {
    this.user = this.sharedService.user;
  }

  user: User;
  ngOnInit() {
  }

}
