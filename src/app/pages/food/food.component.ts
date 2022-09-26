import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IFoodMenu, Ilist, IFoodDetails, IMenu} from "../../interfaces/foodmenu.interface";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html'
})

export class FoodComponent {
  data: IMenu[] = [];
  list: Ilist[] = [];

  //Tìm cách lấy dữ liệu từ api rồi cho vào biến data
  constructor(private http: HttpClient) {
  }

  ngOnInit(){ //hàm này tự động chạy khi print giao diện ra
    const url = 'https://foodgroup.herokuapp.com/api/menu';
    this.http.get<IFoodMenu>(url).subscribe(data => {
      //<IFoodMenu> ép kiểu dữ liệu trả về thành kiểu IFoodMenu
      this.data = data.data;
    });
    const url1 = 'https://foodgroup.herokuapp.com/api/today-special';
    this.http.get<IFoodDetails>(url1).subscribe(value => {
      this.list = value.data;
    });
  }
}
