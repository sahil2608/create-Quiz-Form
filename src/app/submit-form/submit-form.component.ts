import { Component} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent{
  constructor(private _fb: FormBuilder ) { }
  CreateQuizForm: FormGroup;
  ngOnInit() {
    this.CreateQuizForm = this._fb.group({
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

addNewRow() {
  // control refers to your formarray
  const control = <FormArray>this.CreateQuizForm.controls['itemRows'];
  // add new formgroup
  control.push(this.initItemRows());
}

deleteRow(index: number) {
  // control refers to your formarray
  const control = <FormArray>this.CreateQuizForm.controls['itemRows'];
  // remove the chosen row
  control.removeAt(index);
}

onSubmit(){
  console.log(this.CreateQuizForm.value);
}
// CreateQuizForm: FormGroup;
// items : any[]= [];
// ngOnInit() {
//      this.CreateQuizForm = this.fb.group({
//        items: this.fb.array([ this.createaddQuestion()])
//      });
//  }

//  createaddQuestion(): FormGroup {
//   return this.fb.group({
// question:'',
// correctAnswer:'',
//   incorrectAnswer: ''
//  });
// }

// get addQuestions(): FormArray {
//   return this.CreateQuizForm.get('data') as FormArray;
// };

// addItem(): void {

//  this.items.push(this.createaddQuestion());
//  }




// CreateQuizForm = this.fb.group({
//   Question: '',
//   correctAnswer:'',
//   IncorrectAnswer:[''],
// })
// onSubmit(){
//   console.log(this.CreateQuizForm.value);
// }


}

