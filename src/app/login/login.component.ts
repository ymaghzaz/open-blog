import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user = {
    email: '',
    password: ''
 };
  constructor(private authService: AuthService, private router: Router) {
    this.authService.getLoginInfo()
   }

  ngOnInit() {
  }

  signInWithTwitter() {
    this.authService.signInWithTwitter()
    .then((res) => { 
        this.router.navigate(['dashboard'])
      })
    .catch((err) => console.log(err));
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
    .then((res) => { 
        this.router.navigate(['dashboard'])
      })
    .catch((err) => console.log(err));
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
    .then((res) => {
        this.router.navigate(['dashboard'])
      })
    .catch((err) => console.log(err));
  }
  signInWithEmail() {
    this.authService.signInRegular(this.user.email, this.user.password)
       .then((res) => {
          console.log(res);
    
          this.router.navigate(['dashboard']);
       })
       .catch((err) => console.log('error: ' + err));
 }
}
