import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetService } from './greet.service';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
