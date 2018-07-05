import { Component, OnInit } from "@angular/core";
import { Student } from "../models/student.model";
import { Store } from "@ngrx/store";
import { selectorUser } from "../../../core/user/user.reducer";
import { RegisterServiceService } from "../services/register-service.service";
import { userRegisterInfos } from "../models/user.step1";
import { ActionSetStudents } from "../register.reducer";
import { Router } from "@angular/router";

@Component({
  selector: "app-step2",
  templateUrl: "./step2.component.html",
  styleUrls: ["./step2.component.css"]
})
export class Step2Component implements OnInit {
  user: userRegisterInfos = new userRegisterInfos();
  updateStudentInfo: boolean = false;
  studentIndexToBeUpdated: number;
  students: Array<Student> = [];
  student: Student;
  constructor(
    private store: Store<any>,
    public registerService: RegisterServiceService,
    public router: Router
  ) { }

  ngOnInit() {
    this.store.select(selectorUser).subscribe(user => {
      this.user = user;
      this.registerService.getStudentsInfo(user).subscribe(st => {
        const students = JSON.parse(JSON.stringify(st));
        this.students = [];
        students.map(student => {
          this.students.push(new Student(student));
        });
        this.store.dispatch(new ActionSetStudents(students));
      });
    });
  }
  public storeStudentInfo() {
    const student = new Student(this.student);
    this.students.push(student);
    this.student = null;
  }

  public updateStudentParams() {
    this.students[this.studentIndexToBeUpdated] = new Student(this.student);
    this.student = null;
  }
  public addfirstStudent() {
    this.student = new Student({
      responsibleId: this.user.userID
    });
    this.updateStudentInfo = false;
  }
  public addAnotherStudent() {
    this.student = new Student({
      responsibleId: this.user.userID
    });
    this.updateStudentInfo = false;
  }
  public modifyStudentInfo(student, studentIndex) {
    this.student = new Student(student);
    this.studentIndexToBeUpdated = studentIndex;
    this.updateStudentInfo = true;
  }
  public removeUser(student, studentIndex) {
    this.students.splice(studentIndex, 1);
  }
  public cancel() {
    this.student = null;
  }

  public confirmInfo() {
    const students = JSON.parse(JSON.stringify(this.students));
    this.store.dispatch(new ActionSetStudents(students));
    this.user.registerStep = "3";
    this.registerService.setStudent(this.user, students);
    this.registerService.updateUserInfo(this.user);
    this.router.navigate(["register/payment"]);
  }
}
