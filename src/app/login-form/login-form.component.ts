import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username;
  password;
  loginFailureMessage;
  constructor() { }

  ngOnInit() {
  }

  clear() {
    this.loginFailureMessage = '';
  }

  login(c) {
    const user = {
      username: this.username,
      password: this.password
    };
    console.log(user);
    // this.service.login(user).then((response) => {
    //   if (response === 'login failed') {
    //     // alert('login failed');
    //     this.loginFailureMessage = 'Incorrect Username or Password';
    //   } else {
    //     c('Cross click');
    //     this.router.navigate(['profile']);
    //   }
    //
    // });
  }

}
