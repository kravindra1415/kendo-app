import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-inputs',
  templateUrl: './date-inputs.component.html',
  styleUrls: ['./date-inputs.component.css']
})
export class DateInputsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public value: Date = new Date();
  public range = { start: null, end: null } as any

}
