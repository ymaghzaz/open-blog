import { Component, OnInit } from "@angular/core";
import { userRegisterInfos } from "../models/user.step1";
import { Store } from "@ngrx/store";
import { selectorUser } from "../../../core/user/user.reducer";
import { RegisterServiceService } from "../services/register-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-step1",
  templateUrl: "./step1.component.html",
  styleUrls: ["./step1.component.css"]
})
export class Step1Component implements OnInit {
  user: userRegisterInfos = new userRegisterInfos();
  legalConfirmation: boolean = false;
  constructor(
    private store: Store<any>,
    public registerService: RegisterServiceService,
    public router: Router
  ) {
    this.store.select(selectorUser).subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }

  ngOnInit() {}
  firstStepRegister() {
    this.user.registerStep = "2";
    this.registerService.updateUserInfo(this.user);
    this.router.navigate(["register/choose_program"]);
  }
}
