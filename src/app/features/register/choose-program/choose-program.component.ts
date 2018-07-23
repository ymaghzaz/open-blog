import { Component, OnInit, Input } from "@angular/core";
import { COURSES } from "../models/course.names";
import { Course } from "../models/course.model";
 
@Component({
  selector: "app-choose-program",
  templateUrl: "./choose-program.component.html",
  styleUrls: ["./choose-program.component.css"]
})
export class ChooseProgramComponent implements OnInit {
  @Input() cours: any;
  @Input() selectedDays: any;
  COURSES :any =COURSES;
  
  constructor() {
    
  }

  ngOnInit() {}

  public selectDay(day) {
    day.selected = !day.selected;
    day.morning = day.selected;
    day.afternon = day.selected;
    day.evening = day.selected;
  }
  public addCourse(course){
      this.cours.push(new Course(course))
  }
  public removeCourse(course:Course){
    const index = this.cours.map((course:Course) => course.id).indexOf(course.id);
    if (index > -1) {
      this.cours.splice(index, 1);
    }
  }
  public isCourseSelected(courseID){
    const index = this.cours.map((course:Course) => course.id).indexOf(courseID);
    return (index !== -1);
  }
}
