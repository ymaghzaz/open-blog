import { Injectable } from '@angular/core';
import { userRegisterInfos } from '../models/user.step1';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ManageAuthService } from '../../../services/manage-auth.service';

@Injectable()
export class RegisterServiceService {
  private itemsCollection: AngularFirestoreCollection<any>;
  constructor(private ngFirestore: AngularFirestore,
    public manageAuth: ManageAuthService) {
    this.itemsCollection = ngFirestore.collection<any>('users');
  }

  signIn(userID: string, user: userRegisterInfos) {
    user.userID = userID;
    this.manageAuth.getUserInfo(userID).subscribe(dbResponse => {
      if (dbResponse.length) {
        //TODO : create use case
      } else {
        this.createNewUserAndStoreToDB(user);
        this.manageAuth.connect(user);
      }
    })

  };

  createNewUserAndStoreToDB(user: userRegisterInfos) {
    this.itemsCollection.add({ ...user });
  }

}
