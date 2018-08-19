import { Component, Inject} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatDialogRef } from "@angular/material";
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent{
  constructor(private _fb: FormBuilder,  public dialogRef: MatDialogRef<SubmitFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
noquestion : FormGroup;
  AddQuestionForm: FormGroup;
  isButtonVisible = false;

  ngOnInit() {
    this.AddQuestionForm = this._fb.group({
      itemRows: this._fb.array([this.initItemRows()]) // here
    });
  }
  initItemRows() {
    return this._fb.group({
        // list all your form controls here, which belongs to your form array
        Question:['', Validators.required] ,
        correctAnswer:['', Validators.required] ,
        incorrectAnswer1: ['', Validators.required] ,
        incorrectAnswer2: ['', Validators.required] ,
        incorrectAnswer3: ['', Validators.required]
    });
}

close() {
  let data = [];
  this.AddQuestionForm.value.itemRows.forEach((i) => {
    data.push({
      Question: i.Question,
      correctAnswer: i.correctAnswer,
      incorrectAnswer: [
        i.incorrectAnswer1,
        i.incorrectAnswer2,
        i.incorrectAnswer3
      ]
    });
  });

  this.dialogRef.close( this.AddQuestionForm.value);
}

addNewRow() {
  // control refers to your formarray
  const control = <FormArray>this.AddQuestionForm.controls['itemRows'];
  // add new formgroup
  control.push(this.initItemRows());
}

deleteRow(index: number) {
  // control refers to your formarray
  const control = <FormArray>this.AddQuestionForm.controls['itemRows'];
  // remove the chosen row
  control.removeAt(index);
}
onSubmit(){
  console.log(this.noquestion.value);
}
}
