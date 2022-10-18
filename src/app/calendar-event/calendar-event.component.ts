import { Component, OnInit } from '@angular/core';
import { CalendarView } from '@progress/kendo-angular-dateinputs';
import { IntlService } from '@progress/kendo-angular-intl';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css']
})
export class CalendarEventComponent implements OnInit {

  public events: string[] = [];
  constructor(private intlService: IntlService) { }

  ngOnInit() {
  }
  private log(event: string, value?: Date): void {
    this.events.unshift(`${event}${this.formatValue(value)}`);
  }

  private formatValue(value?: Date): string {
    return value ? ` - ${this.intlService.formatDate(value, "d")}` : "";
  }

  public onActiveDateChange(value: Date) {
    this.log("activeDateChange", value)
  }

  public onActiveViewChange(view: CalendarView) {
    this.events = [`activeViewChanged:${view}`].concat(this.events);
  }

  public onChange(value: Date) {
    this.log("change", value)
  }

  public onFocus() {
    this.log("focus");
  }

  public onBlur() {
    this.log("blur");
  }

  public onNavigate(data: {
    activeView: CalendarView; focusedDate: Date;
  }): void {
    this.events = [`navigate:${data.activeView},${data.focusedDate.toLocaleDateString("en-US")}`,].concat(this.events);
  }
}
