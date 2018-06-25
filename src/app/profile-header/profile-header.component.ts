import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {User} from '../models/user.model.client';


@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit, OnChanges {
  @Input() user: User;
  @Input() otherUser: User;
  isOtherUserProfile;


  constructor() {
  }
  userData: User;
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {

    if (typeof changes['otherUser'] !== 'undefined') {
      this.isOtherUserProfile = true;
      this.userData = this.otherUser;
      return;
    } else if (typeof changes['user'] !== 'undefined') {
        this.isOtherUserProfile = false;
        this.userData = this.user; }
  }

}
