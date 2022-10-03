import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IList} from "../../interfaces/weather.interface";

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})

export class WeatherComponent {
    data: IList[] = [];

    constructor(private http: HttpClient) {
    }

    ngOnInit(){
        const url ='http://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric';
        this.http.get<{list:IList[]}>(url).subscribe(data => {
            this.data = data.list;
        });
    }
}