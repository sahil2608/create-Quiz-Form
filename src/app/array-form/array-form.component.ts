
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray} from '@angular/forms';


@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent implements OnInit {

  myForm: FormGroup;

 constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
    question: '',
    correctAnswer: '',
    incorrectAnswers: this.fb.array([])
  })

  }
get incorrectForms(){
  return this.myForm.get('incorrectAnswers') as FormArray
}

addIncorrectAnswer(){

  const incorrectAnswers= this.fb.group({
    incorrectAnswers: []

  })

  this.incorrectForms.push(incorrectAnswers);

}

deleteincorrectAnswers(i){
  this.incorrectForms.removeAt(i);
}
}
