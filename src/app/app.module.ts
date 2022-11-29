import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ActivePostComponent } from './components/active-post/active-post.component';
import { InactivePostComponent } from './components/inactive-post/inactive-post.component';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path: "activePost",
    component: ActivePostComponent
  },
  {
    path: "inactivePost",
    component: InactivePostComponent

  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ActivePostComponent,
    InactivePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
