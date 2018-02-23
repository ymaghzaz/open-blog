import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask-reset-password',
  templateUrl: './ask-reset-password.component.html',
  styleUrls: ['./ask-reset-password.component.css']
})
export class AskResetPasswordComponent implements OnInit {

  public user = {
    email: ''
 };
  constructor(private authService: AuthService, private router: Router) {
    //this.authService.getLoginInfo()
   }

  ngOnInit() {
  }

  askRestPassword() {
    this.authService.resetPassword(this.user.email)
    .then((res) => { 
      console.log('check your mail');
       // this.router.navigate(['dashboard'])
      })
    .catch((err) => console.log(err));
  }

   
 
}
