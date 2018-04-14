import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";
import { userRegisterInfos } from "../models/user.step1";
import { ManageAuthService } from "../../../services/manage-auth.service";
import { RegisterServiceService } from "../services/register-service.service";
import { GoogleProfile } from "../models/google.profile.model";
import { UserInfoFromGoogle } from "../models/user.google.model";

@Component({
  selector: "app-step0",
  templateUrl: "./step0.component.html",
  styleUrls: ["./step0.component.css"]
})
export class Step0Component implements OnInit {
  public user: userRegisterInfos = new userRegisterInfos();
  password: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    public registerService: RegisterServiceService
  ) {}

  ngOnInit() {}

  signInWithEmail() {
    this.authService
      .registerInRegular(this.user.email, this.password)
      .then(res => {
        this.user.registerStep = "1";
        this.user.userID = res.uid;
        this.registerService.signIn(this.user);
      })
      .catch(err => console.log("error: " + err));
  }

  signInWithTwitter() {
    this.authService
      .signInWithTwitter()
      .then(res => {
        console.log("twitter", res);
        this.signInWithSocialMedia(res);
      })
      .catch(err => console.log(err));
  }

  signInWithFacebook() {
    this.authService
      .signInWithFacebook()
      .then(res => {
        this.signInWithSocialMedia(res);
      })
      .catch(err => console.log(err));
  }

  signInWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then(res => {
        console.log("google", res);
        const googleProfile = new GoogleProfile(
          res && res.additionalUserInfo && res.additionalUserInfo.profile
        );
        let user = new UserInfoFromGoogle(googleProfile);

        user.userID = res.user && res.user.uid;
        this.signInWithSocialMedia(user);
      })
      .catch(err => console.log(err));
  }

  private signInWithSocialMedia(user: userRegisterInfos) {
    this.user = new userRegisterInfos(user);
    this.user.registerStep = "1";
    this.registerService.signIn(this.user);
  }
}
