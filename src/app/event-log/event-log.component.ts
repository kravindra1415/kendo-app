import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-log',
  templateUrl: './event-log.component.html',
  styleUrls: ['./event-log.component.css']
})
export class EventLogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() title: string | undefined;
  @Input() events: string[] | undefined;

  public logEvents(event: string, i: number): string {
    return `${this.events?.length as any - i}.${event}`;
  }
}
