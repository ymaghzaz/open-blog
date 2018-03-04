import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { userRegisterInfos } from '../features/register/models/user.step1';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ActionAuthLogin, ActionAuthLogout } from '../core/index';
import { ActionUpdateUser } from '../core/user/user.reducer';

@Injectable()
export class ManageAuthService {

  constructor(
    private ngFirestore: AngularFirestore,
    private router: Router,
    private store: Store<any>) { }

  getUserInfo(userID: string): Observable<any> {
    return this.ngFirestore.collection('users', ref => ref.where('userID', '==', userID)).valueChanges();
  }

  connect(user: userRegisterInfos) {
    this.store.dispatch(new ActionUpdateUser(
      Object.assign({}, user
      )));
    this.onLoginClick();
    switch (user.registerStep) {
      case '':
      case '1':
        this.router.navigate(['/register/complete_information']);
        break;
      case '2':
        this.router.navigate(['/register/choose_program']);
        break;
      default:
        this.router.navigate(['/dashboard']);
    }
  }

  onLoginClick() {
    this.store.dispatch(new ActionAuthLogin());
  }

  onLogoutClick() {
    this.store.dispatch(new ActionAuthLogout());
  }

}
