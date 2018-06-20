import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.css']
})
export class FacebookLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      console.log("this:", response.authResponse.reauthorize_required_in);
      response.authResponse.reauthorize_required_in = 10;
      console.log(response.authResponse.reauthorize_required_in);

      // Logged into your app and Facebook.
      this.testAPI();
    } else if (response.status === 'not_authorized') {
      console.log("not authorized response", response);
    }
    else {
      // The person is not logged into your app or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    }
  }

  testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log("response:", response);
      console.log('Successful login for: ' + response.name);
      console.log("response:",response);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';

    });
  }

  checkLoginState() {
    FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
    });
  }

  FB.getLoginStatus(function(response) {
    this.statusChangeCallback(response);
  });

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '2013205002267162',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.8' // use graph api version 2.8
  });
  };


  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));



  // logout() {
  //   FB.logout(function(response) {
  //     // Person is now logged out
  //   });
  // }

}
