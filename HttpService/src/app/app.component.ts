import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GreetService } from './greet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  temp:any;
constructor(private greet:GreetService){

}

display(){
 this.greet.getUsers().subscribe(data=>this.temp=data);
}


}
