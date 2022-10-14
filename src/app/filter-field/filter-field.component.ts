import { Component, OnInit } from '@angular/core';
import { FilterExpression } from '@progress/kendo-angular-filter';
import { title } from 'process';

@Component({
  selector: 'app-filter-field',
  templateUrl: './filter-field.component.html',
  styleUrls: ['./filter-field.component.css']
})
export class FilterFieldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public filters: FilterExpression[] = [
    {
      field: 'country',
      title: 'Country',
      editor: 'string'
    },
    {
      field: 'discountinued',
      title: 'Discountinued',
      editor: 'boolean'
    }
  ]
}
