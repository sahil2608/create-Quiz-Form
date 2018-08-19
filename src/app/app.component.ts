import { Component} from '@angular/core';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS } from "@angular/material";
import { AppDateAdapter, APP_DATE_FORMATS} from './date.adapter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
        provide: DateAdapter, useClass: AppDateAdapter
    },
    {
        provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
    ]
})
export class AppComponent {
  CreateQuizForm : FormGroup;

  public date;
  public now: Date = new Date();

  minDate = this.now;
  maxDate = new Date(2020, 0, 1);
  public disable: boolean = true;

  constructor(public dialog: MatDialog, private fb: FormBuilder,)
  { setInterval(() => {
    this.date = new Date();
  }, 1);
}

componentData: any = {
  firstname: 'Something',
  lastname:'Important',
  gender: 'M',
  address : {
    city: 'somewhere'
  }
};

openEmojiDialog() {
 const dialogConfig = new MatDialogConfig();
 dialogConfig.disableClose = true;
 const dialogRef = this.dialog.open(SubmitFormComponent,{
    width: '600px',
    height: '500px',
    autoFocus: true,
    data:{ comp: this.componentData }
  });
  dialogRef.afterClosed().subscribe(
    data => console.log(data)
);
}

  ngOnInit(): void {
  this.CreateQuizForm = this.fb.group({
    QuizName: ['', [Validators.required, Validators.minLength(2)]],
    noQuestion:['',[Validators.required, Validators.min(5), Validators.max(180), Validators.pattern('[0-9]+[0-9]')]],
    duration:['',[Validators.required, Validators.min(5), Validators.max(180), Validators.pattern('[0-9]+[0-9]')]] ,
    createdBy:['',Validators.required] ,
    date:['', Validators.required]
  })
}
//****************** this is the disable function****************
disableAll() {
  this.disable = false;
}

quizdetails(value){
  console.log(this.CreateQuizForm.value)
  }
}

