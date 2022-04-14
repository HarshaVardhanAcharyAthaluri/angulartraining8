import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  result = 0;

  addition(no1:any,no2:any){
    this.result = Number(no1)+Number(no2);
  }

  subtraction(no1:any,no2:any){
    this.result = no1 - no2;
  }



}
