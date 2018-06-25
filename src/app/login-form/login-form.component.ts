import {Component, Input, OnInit, Injectable} from '@angular/core';
import {LoginServiceClient} from '../services/login-service-client';
import {Router} from '@angular/router';
import {SharedService} from '../services/shared-service-client';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
@Injectable()
export class LoginFormComponent implements OnInit {
  @Input() c: any;
  username;
  password;
  loginFailureMessage;
  constructor(private service: LoginServiceClient, private router: Router, private sharedService: SharedService) { }

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
    this.service.login(user).then((resp) => {
      if (resp === null) {
        this.loginFailureMessage = 'Invalid username or password';
      } else {
        // this.sharedService.user = resp;
        c('Cross click');
        if (resp.userType === 'Owner') {
          this.router.navigate(['profile/owner']);
        } else if (resp.userType === 'Customer') {
          this.router.navigate(['profile']);
        } else {
          this.router.navigate(['admin']);
        }
      }
      }
    );
  }

  goToAdmin(c) {
    c('Cross click');
    this.router.navigate(['admin']);
  }



}
