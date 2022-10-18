import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { FilterFieldComponent } from './filter-field/filter-field.component';
import { FilterModule } from '@progress/kendo-angular-filter';
import { DateInputsComponent } from './date-inputs/date-inputs.component';
import { CalendarEventComponent } from './calendar-event/calendar-event.component';
import { EventLogComponent } from './event-log/event-log.component';


@NgModule({
  declarations: [			
    AppComponent,
    FormFieldComponent,
    FilterFieldComponent,
    DateInputsComponent,
    CalendarEventComponent,
      EventLogComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DateInputsModule,
    BrowserAnimationsModule,
    GridModule, ButtonsModule,
    DropDownsModule,
    InputsModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    LabelModule,
    FilterModule,DateInputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

