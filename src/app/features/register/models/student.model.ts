export class Student {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  selectedDays: any;
  constructor(student?: any) {
    this.firstName = (student && student.firstName) || null;
    this.lastName = (student && student.lastName) || null;
    this.age = (student && student.age) || null;
    this.gender = (student && student.gender) || "Madame";
    this.selectedDays = (student && student.selectedDays) || [
      {
        name: "lundi",
        selected: false,
        morning: false,
        afternon: false,
        evening: false
      },
      {
        name: "mardi",
        selected: false,
        morning: false,
        evening: false,
        afternon: false
      },
      {
        name: "mercredi",
        selected: false,
        morning: false,
        evening: false,
        afternon: false
      },
      {
        name: "jeudi",
        selected: false,
        morning: false,
        evening: false,
        afternon: false
      },
      {
        name: "vendredi",
        selected: false,
        morning: false,
        evening: false,
        afternon: false
      },
      {
        name: "samedi",
        selected: false,
        morning: false,
        evening: false,
        afternon: false
      },
      {
        name: "dimanche",
        selected: false,
        morning: false,
        evening: false,
        afternon: false
      }
    ];
  }
}
