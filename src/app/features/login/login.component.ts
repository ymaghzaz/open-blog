import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { ActionAuthLogin } from '../../core/index';
import { userRegisterInfos } from '../register/models/user.step1';
import { ManageAuthService } from '../../services/manage-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  textVar = 'bravoo'
  public user = {
    email: '',
    password: ''
  };
  constructor(private authService: AuthService, private router: Router, private store: Store<any>,
    public manageAuth: ManageAuthService) {
  }

  ngOnInit() {
  }

  signInWithTwitter() {
    this.authService.signInWithTwitter()
      .then((res) => {
        this.signInWithSocialMedia(res);
      })
      .catch((err) => console.log(err));
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
      .then((res) => {
        this.signInWithSocialMedia(res)
      })
      .catch((err) => console.log(err));
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then((res) => {
        this.signInWithSocialMedia(res)
      })
      .catch((err) => console.log(err));
  }

  signInWithEmail() {
    this.authService.signInRegular(this.user.email, this.user.password)
      .then((res) => {
        const user = new userRegisterInfos({
          userID: res.uid,
          email: res.email
        })
        this.manageAuth.connect(user);
      })
      .catch((err) => console.log('error: ' + err));
  }


  private signInWithSocialMedia(res) {
    console.log('emailll', res.user)
    const user = new userRegisterInfos(res.user)
    user.registerStep = '1';
    user.userID = res.user && res.user.uid
    this.manageAuth.connect(user);
  }
}
