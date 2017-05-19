import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import {Route, RouterModule} from "@angular/router";

const routes: Route[] = [
  {
    path: '', component: FirstComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirstComponent]
})
export class FirstModule { }
