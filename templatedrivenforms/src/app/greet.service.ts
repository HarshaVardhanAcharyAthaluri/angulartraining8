import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class GreetService {

  constructor(private http:HttpClient){

  }

  greet(){
    return "Hello Iam Here!";
  }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
