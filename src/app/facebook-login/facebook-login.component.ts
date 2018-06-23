
import { Component, OnInit } from '@angular/core';
import { } from '@types/gapi.auth2';
@Component({
  selector: 'app-facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.css']
})
export class FacebookLoginComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

  onSignIn(googleUser) {

    console.log("I am here");
    console.log("googleUser:",googleUser);
    var profile = googleUser.getBasicProfile();
    console.log(profile)
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  };
}
