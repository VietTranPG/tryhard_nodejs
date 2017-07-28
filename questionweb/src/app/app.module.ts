import { MainComponent } from './main/main.component';
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
import { QuestionPageComponent } from './question-page/question-page.component';
import { MenuComponent } from './menu/menu.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    QuestionPageComponent,
    MenuComponent,
    MainComponent,
    AddQuestionComponent,
    ErrorPageComponent
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
