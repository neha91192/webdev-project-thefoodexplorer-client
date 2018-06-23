import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-profile-interests',
  templateUrl: './profile-interests.component.html',
  styleUrls: ['./profile-interests.component.css']
})
export class ProfileInterestsComponent implements OnInit, OnChanges{
  @Input() user: User;

  userData: User;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['user'] !== 'undefined') {
      this.userData = this.user;
    }
  }

}
