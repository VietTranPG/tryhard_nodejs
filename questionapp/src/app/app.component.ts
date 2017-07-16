import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Login } from '../pages/login/login';
import { Storage } from '@ionic/storage';
import {HomeTab} from '../pages/home-tab/home-tab';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage) {
    splashScreen.show();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
    });
    this.storage.get('user').then((val) => {
      if (val) {
        this.rootPage = HomeTab;
      } else {
        this.rootPage = Login;
      }
      splashScreen.hide();
    });
  }
}

