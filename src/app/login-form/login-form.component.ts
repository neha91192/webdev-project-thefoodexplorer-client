import {Component, Input, OnInit, Injectable} from '@angular/core';
import {LoginServiceClient} from '../services/login-service-client';
import {Router} from '@angular/router';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider} from 'angular5-social-login';
import {User} from '../models/user.model.client';

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
  user: User;
  constructor(private service: LoginServiceClient, private router: Router,
              private socialAuthService: AuthService) { }

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
        } else if (resp.userType === 'Admin') {
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

   socialSignIn(socialPlatform: string, c) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + 'sign in data:' , userData);
        this.user = new User();
        // this.user.userId = +userData.id;
        const fullName = userData.name.split(' ');
        this.user.firstName = fullName[0];
        this.user.lastName = fullName[1];
        this.user.emailId = userData.email;
        this.user.userType = 0;
        this.service.socialLogin(this.user)
          .then((response) => {
            if (response !== null) {
              c('Cross click');
              this.router.navigate(['profile']);
            }
          });

      }
    );
  }
}
