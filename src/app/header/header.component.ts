import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {ProfileServiceClient} from '../services/profile-service-client';
import {LoginServiceClient} from '../services/login-service-client';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  navbarOpen;
  user;
  isAdmin;
  isOwner;
  isLoggedIn;
  @Input() locationDetails: object;
  locationData;

  constructor(private router: Router, private profile: ProfileServiceClient, private loginService: LoginServiceClient) {
    this.fetchProfile();
  }

  ngOnInit() {
    this.isLoggedIn = false;
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }


  home() {
    this.router.navigate(['/home']);
  }

  fetchProfile() {
    this.profile.fetchProfile().then(user => {
      if (user !== null) {
        this.user = user;
        this.isLoggedIn = true;
        if (user.userType === 'Admin') {
          this.isAdmin = true;
        } else if (user.userType === 'Owner') {
          this.isOwner = true;
        }

      }

    });
  }

  logout() {
    this.loginService
      .logout()
      .then( () => {
          alert('You have been logged out successfully!');
          location.reload();
          this.router.navigate(['/home']);

      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes['locationDetails'] !== 'undefined') {
      this.locationData = this.locationDetails;
    }
  }

}
