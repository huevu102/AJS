import {Component} from "@angular/core";
import {IContact} from "../../interfaces/exam.interface";

@Component({
    selector: 'app-exam',
    templateUrl: './exam.component.html',
    styleUrls: ['exam.component.css']
})

export class ExamComponent extends Component{
    people: IContact[] = [
        {city: 'Rome', name1: 'R1', name2: 'R2', name3: 'R3', title1: 'RT1', title2:'RT2', title3:'RT3', image1:'assets/img/4.jpeg', image2:'assets/img/5.jpeg', image3:'assets/img/6.jpeg'},
        {city:'Paris', name1:'Robert King', name2:'Michael Suyama', name3:'Margaret Peacock', title1:'Team Lead', title2:'Developer', title3:'Developer', image1:'assets/img/1.jpeg', image2:'assets/img/2.jpeg', image3:'assets/img/3.jpeg'},
        {city: 'London', name1: 'L1', name2: 'L2', name3: 'L3', title1: 'LT1', title2:'LT2', title3:'LT3', image1:'assets/img/7.jpeg', image2:'assets/img/8.jpeg', image3:'assets/img/9.jpeg'},
    ];

    selectedPerson?: IContact;

    onSelect(person: IContact): void {
        this.selectedPerson = person;
    }
}