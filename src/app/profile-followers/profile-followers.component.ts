import {Component, OnInit, SimpleChanges, OnChanges, Input} from '@angular/core';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-profile-followers',
  templateUrl: './profile-followers.component.html',
  styleUrls: ['./profile-followers.component.css']
})
export class ProfileFollowersComponent implements OnInit, OnChanges {
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
