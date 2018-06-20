import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import {isLoop} from 'tslint';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  closeResult: string;

  username;
  password;
  loginFailureMessage;
  isLogin;
  isSignUp;

  ngOnInit() {
    this.isLogin = true;
  }

  constructor(private modalService: NgbModal,
              private router: Router) {
    this.isLogin = true;

  }

  open(content) {
    this.modalService.open(content, { centered: true, size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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

  toggleLogin() {

    if (this.isSignUp) {
      this.isSignUp =  !this.isSignUp;
    }
    if (!this.isLogin) {
      this.isLogin = true;
    }

  }
  toggleSignup() {
    if (this.isLogin) {
      this.isLogin =  !this.isLogin;
    }
    if (!this.isSignUp) {
      this.isSignUp = true;
    }
  }


}