import {Component} from "@angular/core";
import {IStudent} from "../../interfaces/student.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends Component{
  //khai báo biến cho kiểu dữ liệu mở rộng IStudent
  student: IStudent = {id:1, name:'Nam', age:19, address:'8 Ton That Thuyet'};

  arrayNumber: number[] = [1, 2, 3, 4, 5];

  stringArray: string[] = ["Nguyen Van A", "Nguyen Van B", "Nguyen Van C"];

  ls: IStudent[] = [
    {id:1, name:'Nguyen Van A', age:19, address:'8 Ton That Thuyet'},
    {id:2, name:'Nguyen Van B', age:21, address:'8 Ton That Thuyet'},
    {id:3, name:'Nguyen Van C', age:16, address:'8 Ton That Thuyet'}
  ];
}
