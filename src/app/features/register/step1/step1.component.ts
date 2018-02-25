import { Component, OnInit } from '@angular/core';
import { userRegisterInfos } from '../models/user.step1';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  user: userRegisterInfos = new userRegisterInfos();
  legalConfirmation: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  firstStepRegister() {
    console.log(this.user, this.legalConfirmation)
  }
}
