import { COURSES } from "./course.names";
import { Course } from "./course.model";
import { SelectedDay } from "./selected-day.model";
import { DAYS } from "./days.names";

export class Student {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  selectedDays: any;
  cours: any;
  id: string;
  responsibleId: string;
  constructor(student?: any) {
    this.responsibleId = (student && student.responsibleId) || null;
    this.id = (student && student.id) || null;
    this.firstName = (student && student.firstName) || null;
    this.lastName = (student && student.lastName) || null;
    this.age = (student && student.age) || null;
    this.gender = (student && student.gender) || "Madame";
    this.cours = this.initCourses((student && student.cours) || COURSES);
    this.selectedDays = this.initSelectedDays(
      (student && student.selectedDays) || DAYS
    );
  }

  public initCourses(courses) {
    const _courses = [];
    courses.map(course => {
      _courses.push(new Course(course));
    });
    return _courses;
  }
  public initSelectedDays(selectedInfo) {
    const _selectedInfo = [];
    selectedInfo.map(day => {
      _selectedInfo.push(new SelectedDay(day));
    });
    return _selectedInfo;
  }
}
