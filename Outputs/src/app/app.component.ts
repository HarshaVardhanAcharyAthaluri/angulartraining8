import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usr:any;

  message:any;
  getusername(u:any){
    this.usr = u;
  }

  getMessage(data:any){
    this.message = data;
  }

}
