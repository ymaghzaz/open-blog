export class Course {
  name: string;
  numberOfHours: number;
  id: number;
  constructor(course?: any) {
    this.name = (course && course.name) || "";
    this.id = (course && course.id) || 0;
    this.numberOfHours = (course && course.numberOfHours) || 0;
  }
}
