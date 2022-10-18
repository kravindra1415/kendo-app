import { Component, OnInit } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';

export interface JsonModel {
  birthDate: string;
}

export interface User {
  birthDate: Date;
}

@Component({
  selector: 'app-calendar-json',
  templateUrl: './calendar-json.component.html',
  styleUrls: ['./calendar-json.component.css']
})
export class CalendarJsonComponent implements OnInit {

  public user!: User;

  //Parse JSON Data
  public model: JsonModel = JSON.parse('{"birthDate":"2017-06-30"}');

  //stringify model for presentational purpose
  public output: string = JSON.stringify(this.model);

  constructor(public intlService: IntlService) { }

  ngOnInit() {
    this.user = this.parse(this.model);
  }

  public handleChange(value: Date) {
    this.model.birthDate = this.intlService.formatDate(value, "yyyy-MM-dd");
    this.output = JSON.stringify(this.model);
    this.user = this.parse(this.model);
  }

  private parse(json: any) {
    Object.keys(json).map((key) => {
      const date = new Date(json[key]);
      if (!isNaN(date.getTime())) {
        json[key] = date;
      }
    });
    return json;
  }


}
