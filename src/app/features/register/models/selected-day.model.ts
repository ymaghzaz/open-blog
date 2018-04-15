export class SelectedDay {
  name: string;
  selected: boolean;
  morning: boolean;
  afternon: boolean;
  evening: boolean;
  constructor(selectedDay?: any) {
    this.name = (selectedDay && selectedDay.name) || "";
    this.selected = (selectedDay && selectedDay.selected) || false;
    this.morning = (selectedDay && selectedDay.morning) || false;
    this.afternon = (selectedDay && selectedDay.afternon) || false;
    this.evening = (selectedDay && selectedDay.evening) || false;
  }
}
