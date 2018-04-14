import { Component, OnInit } from "@angular/core";
import { Student } from "../models/student.model";

@Component({
  selector: "app-choose-program",
  templateUrl: "./choose-program.component.html",
  styleUrls: ["./choose-program.component.css"]
})
export class ChooseProgramComponent implements OnInit {
  cours: any = [];
  selectedDays = [];
  studens: Array<Student> = [];
  student: Student = new Student();
  constructor() {
    this.selectedDays = [
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
    this.cours = [
      {
        name: "ar",
        NumberOfHours: 0
      },
      {
        name: "cr",
        NumberOfHours: 0
      }
    ];
  }

  ngOnInit() {}

  public selectDay(day) {
    day.selected = !day.selected;
    day.morning = day.selected;
    day.afternon = day.selected;
    day.evening = day.selected;
  }
}
