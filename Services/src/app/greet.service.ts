import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class GreetService {

  greet(){
    return "Hello Iam Here!";
  }
}
