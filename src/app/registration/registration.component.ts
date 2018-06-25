import { Component, OnInit, Input } from '@angular/core';
import {RegistrationServiceClient} from '../services/registration-service-client';
import {User} from '../models/user.model.client';
import {Router} from '@angular/router';

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
  // selectedUserType;


  constructor(private service: RegistrationServiceClient, private router: Router) {

  }

  ngOnInit() {

  }

  register() {
    // console.log(this.selectedUserType);
    if (this.password !== this.confirmPassword) {
      alert('passwords do not match');
    } else {
      const user = new User();
      user.username = this.username;
      user.password = this.password;
      user.firstName = this.name;
      user.userType = 0;
      this.service.register(user).then(newUser => {
        this.c('Cross click');
        if (user !== null) {
          this.router.navigate(['profile']);
        } else {
          alert ('Username is already taken.');
        }

      });

    }
  }

  // changeDropdownValue(userType) {
  //   //     this.selectedUserType = userType;
  //   // }

  clear() {

  }

  openRegisterOwner() {
    this.c('Cross click');
    this.router.navigate(['register']);
  }

}
