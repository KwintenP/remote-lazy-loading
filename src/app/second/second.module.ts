import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second/second.component';
import {Route, RouterModule} from "@angular/router";

const routes: Route[] = [
  {
    path: '', component: SecondComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SecondComponent]
})
export class SecondModule { }
