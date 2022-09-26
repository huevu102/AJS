import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'
})
export class StudentComponent extends Component{
  @Input()
  stName ?: string;
}
