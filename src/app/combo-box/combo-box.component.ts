import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public allowCustom = true;
  public listItems: Array<string> = ["Baseball",
    "Basketball",
    "Cricket",
    "Field Hockey",
    "Football",
    "Table Tennis",
    "Tennis",
    "Volleyball",];
}
