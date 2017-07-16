import { Component } from '@angular/core';
import { NavController, NavParams,App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Login } from '../login/login';
/**
 * Generated class for the Setting page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class Setting {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Setting');
  }
  logout() {
    this.storage.clear().then(() => {
      this.app.getRootNav().setRoot( Login );
    })
  }
}
