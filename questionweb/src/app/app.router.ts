import { ErrorPageComponent } from './error-page/error-page.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { MainComponent } from './main/main.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
export const appRouter: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    {
        path: 'main',
        component: MainComponent,
        children: [
            { path: '', redirectTo: 'question',pathMatch:'full' },
            {path:'add-question',component:AddQuestionComponent},
            { path: 'question', component: QuestionPageComponent }
        ]
    },
     { path: "**", component: ErrorPageComponent },
]