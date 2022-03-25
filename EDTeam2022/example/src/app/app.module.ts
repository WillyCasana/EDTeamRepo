import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskPageComponent } from './modules/task/page/task-page.component';
import { LoginPageComponent } from './modules/auth/page/login-page.component';
import { HomeComponent } from './home/home.component';
import { HomeChildOneComponent } from './home-child-one/home-child-one.component';
import { HomeChildTwoComponent } from './home-child-two/home-child-two.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskPageComponent,
    LoginPageComponent,
    HomeComponent,
    HomeChildOneComponent,
    HomeChildTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
