
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from '../core/services/data.service';
import { UtilityService } from '../core/services/utility.service';
import { IonicStorageModule } from '@ionic/storage';
// import page
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { HomeTab } from '../pages/home-tab/home-tab';
import { Weather } from '../pages/weather/weather';
import { Setting } from '../pages/setting/setting';
import { Product } from '../pages/product/product';
import { Details } from './../pages/details/details';
@NgModule({
  declarations: [
    MyApp,
    Login,
    Signup,
    HomeTab,
    Weather,
    Setting,
    Product,
    Details
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Signup,
    HomeTab,
    Weather,
    Setting,
    Product,
    Details
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UtilityService,
    DataService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
