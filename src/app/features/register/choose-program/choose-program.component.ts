import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-choose-program",
  templateUrl: "./choose-program.component.html",
  styleUrls: ["./choose-program.component.css"]
})
export class ChooseProgramComponent implements OnInit {
  @Input() cours: any;
  @Input() selectedDays: any;

  constructor() {}

  ngOnInit() {}

  public selectDay(day) {
    day.selected = !day.selected;
    day.morning = day.selected;
    day.afternon = day.selected;
    day.evening = day.selected;
  }
}
