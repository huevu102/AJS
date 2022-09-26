import {Component, Input} from "@angular/core";
@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html'
})
export class ClassroomComponent extends Component{
   classroomName = 'T2207E';
   numberStudents = 12;

   @Input()
   clName?: string;

   upNumber(){
     this.numberStudents++;
   }

   studentName1 = 'Nguyễn Văn An';
   studentName2 = 'Nguyễn Văn B';
   studentName3 = 'Nguyễn Văn C';
}
