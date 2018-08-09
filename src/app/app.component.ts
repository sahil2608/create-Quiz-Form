import { Component} from '@angular/core';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { MatDialog } from "@angular/material";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  CreateQuizForm : FormGroup;
  constructor(public dialog: MatDialog, private fb: FormBuilder){}

  ngOnInit(): void {
  this.CreateQuizForm = this.fb.group({
    QuizName: ['', [Validators.required, Validators.minLength(2)]],
    noQuestion:['',Validators.required],
    duration:['',Validators.required] ,
    createdBy:['',Validators.required] ,
    date:['', Validators.required]
  })

}

  openEmojiDialog() {
    let dialog = this.dialog.open(SubmitFormComponent,{
      width: '500px',
      height: '500px'
    });
  }
  // onSubmit() {
  //   console.warn(this.profileForm.value);
  // }
onSubmit(){
  if(this.CreateQuizForm.valid)
  {console.log(this.CreateQuizForm.value);}
  else{
    console.log("Not Valid details")
  }

}
}

