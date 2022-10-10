import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { RouterModule, Routes } from '@angular/router';

const postRoutes:Routes=[
  {
    path:"",component:PostComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(postRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
