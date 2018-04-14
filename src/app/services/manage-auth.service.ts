import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { userRegisterInfos } from "../features/register/models/user.step1";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import {
  ActionAuthLogin,
  ActionAuthLogout,
  LocalStorageService
} from "../core/index";
import { ActionUpdateUser } from "../core/user/user.reducer";

@Injectable()
export class ManageAuthService {
  constructor(
    private ngFirestore: AngularFirestore,
    private router: Router,
    private store: Store<any>,
    private localStorage: LocalStorageService
  ) {}

  getUserInfo(userID: string): Observable<any> {
    return this.ngFirestore
      .collection("users")
      .doc(userID)
      .valueChanges();
  }

  connect(userInfo: userRegisterInfos) {
    this.getUserInfo(userInfo.userID).subscribe(user => {
      this.store.dispatch(new ActionUpdateUser(Object.assign({}, user)));
      this.localStorage.setItem("user", user);
      this.onLoginClick();
      switch (user.registerStep) {
        case "":
        case "1":
          this.router.navigate(["register/complete_information"]);
          break;
        case "2":
          this.router.navigate(["register/choose_program"]);
          break;
        default:
          this.router.navigate(["dashboard"]);
      }
    });
  }

  onLoginClick() {
    this.store.dispatch(new ActionAuthLogin());
  }

  onLogoutClick() {
    this.store.dispatch(new ActionAuthLogout());
  }
}
