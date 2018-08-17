
import { Component} from '@angular/core';


@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent{
  public date;
  public now: Date = new Date();

  constructor() {
      setInterval(() => {
        this.date = new Date();
      }, 1);
  }
}
