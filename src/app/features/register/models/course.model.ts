export class Course {
  name: string;
  niveau: number;
  id: number;
  constructor(course?: any) {
    this.name = (course && course.name) || "";
    this.id = (course && course.id) || 0;
    this.niveau = (course && course.niveau) || 0;
  }
}
