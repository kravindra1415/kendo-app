import { Component, OnInit } from '@angular/core';
import { filterBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-data-query',
  templateUrl: './data-query.component.html',
  styleUrls: ['./data-query.component.css']
})
export class DataQueryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(JSON.stringify(this.result, null, 2));
  }

  data = [
    { name: "pork", category: "Food", subcategory: "Meat" },
    { name: "pepper", category: "Food", subcategory: "Vagetables" },
    { name: "Beef", category: "Food", subcategory: "Meat" },
  ]

  result = filterBy(this.data, {
    logic: 'and',
    filters: [{
      field: "name", operator: "startswith", value: "p"
    },
    { field: "subcategory", operator: "eq", value: "Meat" },
    ]
  });
}
