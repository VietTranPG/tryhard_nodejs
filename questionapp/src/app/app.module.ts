import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Login} from '../pages/login/login';
import {Signup} from '../pages/signup/signup';
import { HttpModule } from '@angular/http';
import {DataService} from '../core/services/data.service';
import {UtilityService} from '../core/services/utility.service';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Signup
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Signup
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UtilityService,
    DataService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
