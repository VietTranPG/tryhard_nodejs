import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import routes
import { appRouter } from './app.router'
import { Routes, RouterModule } from '@angular/router';
//import providers
import { DataService } from '../services/data.service';
import { UtilityService } from '../services/utility.service';
import { HttpModule } from '@angular/http';
// import component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [DataService,UtilityService,AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
