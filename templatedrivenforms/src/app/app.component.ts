import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GreetService } from './greet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  submitdata(userdata:any){
    console.log(userdata)
  }



}
