import { Component, OnInit } from "@angular/core";
import { Student } from "../models/student.model";

@Component({
  selector: "app-step2",
  templateUrl: "./step2.component.html",
  styleUrls: ["./step2.component.css"]
})
export class Step2Component implements OnInit {
  cours: any = [];
  selectedDays = [];
  studens: Array<Student> = [];
  student: Student = new Student();
  constructor() {
    this.selectedDays = [];
    this.cours = [];
  }

  ngOnInit() {}
  public storeStudent() {
    console.log(this.student);
  }
}
