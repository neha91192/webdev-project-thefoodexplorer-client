import { Component, OnInit, Input } from '@angular/core';
import {RegistrationServiceClient} from '../services/registration-service-client';
import {User} from '../models/user.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../services/shared-service-client';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Input() c: any;
  username;
  password;
  confirmPassword;
  name;
  selectedUserType;

  constructor(private service: RegistrationServiceClient, private router: Router,
              private sharedService: SharedService) {
    this.selectedUserType = 'Customer';

  }

  ngOnInit() {

  }

  register() {
    console.log(this.selectedUserType);
    if (this.password !== this.confirmPassword) {
      alert('passwords do not match');
    } else {
      const user = new User();
      user.username = this.username;
      user.password = this.password;
      user.firstName = this.name;
      user.userType = this.selectedUserType;
      this.service.register(user).then(newUser => {
        this.sharedService.user = newUser;
        this.c('Cross click');
        this.router.navigate(['profile']);
      });

    }
  }

  changeDropdownValue(userType) {
      this.selectedUserType = userType;
  }

  clear() {

  }

  openRegisterOwner() {
    this.c('Cross click');
    this.router.navigate(['register']);
  }

}
