import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Input()
  temp:any;

  ngOnChanges(simplechnage:SimpleChanges){
    console.log(simplechnage);
  }



  @Output()
  message = new EventEmitter();

  sendMessage(msg:any){
    this.message.emit(msg);
  }
  
}
