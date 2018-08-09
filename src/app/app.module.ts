import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { ValidFormComponent } from './valid-form/valid-form.component';
import { HttpClientModule } from '@angular/common/http';

import {MatDialogModule, MatCardModule,MatDatepickerModule ,MatNativeDateModule,} from "@angular/material";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    NestedFormComponent,
    ArrayFormComponent,
    SubmitFormComponent,
    ValidFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
     MatSelectModule,
     MatButtonModule,
     MatCheckboxModule,
     MatChipsModule,
     FormsModule,
     MatDialogModule,
     HttpClientModule,
     MatCardModule,
     MatDatepickerModule ,
     MatNativeDateModule,
  ],
  exports:[SubmitFormComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [SubmitFormComponent]
})
export class AppModule { }
