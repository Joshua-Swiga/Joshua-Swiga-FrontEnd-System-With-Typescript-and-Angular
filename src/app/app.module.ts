import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';
import { StudentCreateComponent } from './Pages/student-create/student-create.component';
import { StudentPageComponent } from './Pages/student-page/student-page.component';
import { StudentEditComponent } from './Pages/student-edit/student-edit.component';
//import { StudentPageComponent } from './student-page/student-page.component';
//import { LoaderComponent } from './Pages/Partials/Pages/Partials/loader/loader.component';


// What is this decorator used for
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    NavbarComponent,
    StudentCreateComponent,
    StudentPageComponent,
    StudentEditComponent,
    //StudentPageComponent,
    //LoaderComponent
  ],

  // Why was each import necessary
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
