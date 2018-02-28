import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { userRegisterInfos } from '../models/user.step1';
import { ManageAuthService } from '../../../services/manage-auth.service';
import { RegisterServiceService } from '../services/register-service.service';

@Component({
  selector: 'app-step0',
  templateUrl: './step0.component.html',
  styleUrls: ['./step0.component.css']
})
export class Step0Component implements OnInit {

  //test 
  public user: userRegisterInfos = new userRegisterInfos();
  constructor(private authService: AuthService,
    private router: Router,
    public registerService: RegisterServiceService) {
    this.user.registerStep = '1';
  }

  ngOnInit() {
  }

  signInWithEmail() {
    this.authService.registerInRegular(this.user.email, this.user.password)
      .then((res) => {
        this.user.userID = res.uid;
        this.registerService.signIn(res.uid, this.user);
      })
      .catch((err) => console.log('error: ' + err));
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
        this.signInWithSocialMedia(res);
      })
      .catch((err) => console.log(err));
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then((res) => {
        console.log('google', res)
        this.signInWithSocialMedia(res);
      })
      .catch((err) => console.log(err));
  }

  private signInWithSocialMedia(res) {
    this.user = new userRegisterInfos(res.user)
    this.user.registerStep = '1';
    this.user.userID = res.user && res.user.uid
    this.registerService.signIn(this.user.userID, this.user);
  }
}
