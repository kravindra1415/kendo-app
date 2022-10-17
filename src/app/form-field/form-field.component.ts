import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit, AfterViewInit {

  @ViewChild('password') public textbox!: TextBoxComponent;

  //for a calendar input
  public model: any = { date: undefined };

  constructor() { }

  ngAfterViewInit(): void {
    this.textbox.input.nativeElement.type = "password";
  }

  ngOnInit() {
    console.warn(this.form);
    
  }

  toggleVisibiity() {
    const inputE1 = this.textbox.input.nativeElement;
    inputE1.type = inputE1.type === "password" ? "text" : "password";
  }

  public form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    date: new FormControl(),
    loggedin: new FormControl()
  });

  public login() {
    this.form.markAllAsTouched();
  }

  public clearForm() {
    this.form.reset();
  }
}
