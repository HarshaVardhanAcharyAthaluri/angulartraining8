import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinboxComponent } from './minbox/minbox.component';
import { ProductComponent } from './product/product.component';
import { SentComponent } from './sent/sent.component';

const routes: Routes = [
  {path:'inbox',component:MinboxComponent},
  {path:'sent',component:SentComponent},
  {path:'product',component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
