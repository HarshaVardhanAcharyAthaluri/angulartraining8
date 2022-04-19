import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Input()
  temp:any;

  @Output()
  message = new EventEmitter();

  sendMessage(msg:any){
    this.message.emit(msg);
  }
  
}
