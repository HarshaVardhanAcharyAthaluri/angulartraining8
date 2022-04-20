import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GreetService } from './greet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {



ngOnInit(){
  console.log('NgOnit');
  this.greet.getUsers().subscribe(data=>this.temp=data);
}
  temp:any;
constructor(private greet:GreetService){
console.log('Hello Iam COnstructort');
}


}
