import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IFoodMenu, IMenu} from "../../interfaces/foodmenu.interface";
import {IFood} from "../../interfaces/food.interface";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html'
})

export class FoodComponent {
  // Khai báo biến
  data: IMenu[] = [];
  foods: IFood[] = [];

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
    this.http.get<{data:IFood[]}>(url1).subscribe(data => {
      this.foods = data.data;
    });
  }
}
