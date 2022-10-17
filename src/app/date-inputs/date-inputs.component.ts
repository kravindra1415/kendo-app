import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  today: Date = this.getDate(new Date());

  isBusy(date: Date): boolean {
    return date.getDate() % 2 === 0;
  }

  form: FormGroup = new FormGroup({
    appointement: new FormControl(null, Validators.required),
  });

  getDate(arg0: Date): Date {
    return arg0;
  }

}


