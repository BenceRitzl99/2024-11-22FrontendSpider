import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SPIDERSComponent } from './spiders/spiders.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"spiders",component:SPIDERSComponent},
  {path:"sign-up",component:SignUpComponent},
  {path:"", redirectTo:"sign-up",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
