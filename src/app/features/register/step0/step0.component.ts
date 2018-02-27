import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { userRegisterInfos } from '../models/user.step1';

@Component({
  selector: 'app-step0',
  templateUrl: './step0.component.html',
  styleUrls: ['./step0.component.css']
})
export class Step0Component implements OnInit {

  //test 
  public user: userRegisterInfos = new userRegisterInfos();
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signInWithEmail() {
    this.authService.signInRegular(this.user.email, this.user.password)
      .then((res) => {
        console.log(res);
        this.router.navigate(['/dashboard']);
      })
      .catch((err) => console.log('error: ' + err));
  }

  signInWithTwitter() {
    this.authService.signInWithTwitter()
      .then((res) => {
        this.router.navigate(['/dashboard'])
      })
      .catch((err) => console.log(err));
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
      .then((res) => {
        this.router.navigate(['/dashboard'])
      })
      .catch((err) => console.log(err));
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then((res) => {
        this.router.navigate(['/dashboard'])
      })
      .catch((err) => console.log(err));
  }

}
