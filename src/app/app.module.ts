import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {Route, RouterModule} from "@angular/router";
import {FirstComponent} from "./first/first/first.component";
import {FirstModule} from "./first/first.module";

const routes: Route[] = [
  {
    path: 'first', loadChildren: 'app/first/first.module#FirstModule',
  },
  {
    path: 'second', loadChildren: 'app/second/second.module#SecondModule',
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FirstModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
