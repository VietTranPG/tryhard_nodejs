import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Login } from '../pages/login/login';
import { Storage } from '@ionic/storage';
import { HomeTab } from '../pages/home-tab/home-tab';
declare var localStorage: any;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar,private _splashScreen: SplashScreen, private storage: Storage) {
    statusBar.styleDefault();
    platform.ready().then(() => {
      let user = localStorage.getItem('user')
      if (user) {
        this.rootPage = HomeTab;
      } else {
        this.rootPage = Login;
      }
      setTimeout(() => {
        this._splashScreen.hide();
      }, 300);
      // this.storage.get('user').then((val) => {
      // if (val) {

      // } else {

      // }

      // });
    });

  }
}

