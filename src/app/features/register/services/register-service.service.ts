import { Injectable } from "@angular/core";
import { userRegisterInfos } from "../models/user.step1";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { ManageAuthService } from "../../../services/manage-auth.service";
import { Student } from "../models/student.model";

@Injectable()
export class RegisterServiceService {
  private itemsCollection: AngularFirestoreCollection<any>;
  constructor(
    private ngFirestore: AngularFirestore,
    public manageAuth: ManageAuthService
  ) {
    this.itemsCollection = ngFirestore.collection<any>("users");
  }

  signIn(user: userRegisterInfos) {
    this.manageAuth.getUserInfo(user.userID).subscribe(userInfo => {
      if (userInfo === null) {
        // this is a new user :) try to connect
        console.log("welcome this new user");
        this.createNewUserAndStoreToDB(user);
        this.manageAuth.connect(user);
      } else {
        // the user is already exist
        console.log("the user is already exist");
        this.manageAuth.connect(userInfo);
      }
    });
  }

  createNewUserAndStoreToDB(user: userRegisterInfos) {
    this.itemsCollection.doc(user.userID).set({ ...user });
  }

  updateUserInfo(user: userRegisterInfos) {
    this.itemsCollection.doc(user.userID).update({ ...user });
  }

  setStudent(user: userRegisterInfos, students: any) {
    students.map((student: Student) => {
      const db = this.itemsCollection.doc(user.userID).collection("students");
      console.log(" update ,", student.age, student.id);
      if (student && student.id) {
        db.doc(student.id).update({ ...student });
      } else {
        const studentID =
          user.userID.toString() +
          "__" +
          student.firstName.toString() +
          "__" +
          student.lastName.toString() +
          "__" +
          Date.now().toString();
        student.id = (student && student.id) || studentID;
        db.doc(student.id).set({ ...student });
      }
    });
  }

  getStudentsInfo(user: userRegisterInfos) {
    return this.itemsCollection
      .doc(user.userID)
      .collection("students")
      .valueChanges();
  }
  checkoutUser(user: userRegisterInfos, paymentInfo) {
    this.itemsCollection
      .doc(user.userID)
      .collection("payment")
      .add(paymentInfo);
  }
}
