import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GreetService } from './greet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  signupform:any;

  ngOnInit(){
    this.signupform = new FormGroup({
      'username':new FormControl(null,Validators.required),
      'contact':new FormControl(null),
      'email':new FormControl(null)
    });
  }


  submitdata(){
    console.log(this.signupform);
  }



}
