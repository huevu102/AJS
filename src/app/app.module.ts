import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassroomComponent} from "./classroom/classroom.component";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {RegisterComponent} from "./pages/register/register.component";
import {FoodComponent} from "./pages/food/food.component";
import {HttpClientModule} from "@angular/common/http";
import {WeatherComponent} from "./pages/weather/weather.component";
import {ExamComponent} from "./pages/exam/exam.component";

//Khai báo các duong dan page trong website
const appRoutes: Routes = [
  //với trang homepage thì '' sẽ để trống (tên đuôi trong đường dẫn link)
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'food', component: FoodComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'exam', component: ExamComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ClassroomComponent,
    HomeComponent,
    LoginComponent,
    AboutUsComponent,
    ContactComponent,
    RegisterComponent,
    FoodComponent,
    WeatherComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(appRoutes),
    //forRoot: Ngay thời điểm chạy app danh sách appRoutes sẽ được nạp vào
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
