import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { Router } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DoSectionComponent } from './section/do-section.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  
 
 
  declarations: [
    AppComponent,
    StudentComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    PortfolioComponent,
    HomeComponent,
    InfoComponent,
    AccueilComponent,
    DoSectionComponent,
    SignupComponent,
    LoginComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router : Router){}
}
