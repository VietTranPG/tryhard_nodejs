import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Signup } from '../signup/signup';
import { DataService } from '../../core/services/data.service';
import { SystemConstants } from '../../core/common/system.constants';
import { UtilityService } from '../../core/services/utility.service';
import { HomeTab } from '../home-tab/home-tab';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  email: string;
  password: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: DataService, private utility: UtilityService, private storage: Storage) {
    this.email = this.navParams.get("email");
    this.password = this.navParams.get("password");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
  gotoSignup() {
    this.navCtrl.push(Signup)
  }
  login(email, password) {
    var data = { email: email, password: password }
    var url = 'user/getLogin';
    this._http.post(url, data).subscribe(res => {
      if (res.status == SystemConstants.STATUS_ERROR) {
        this.utility.alert('Login fail', res.message);
      } else {
        this.storage.set('user', res.data);
        
        this.navCtrl.push(HomeTab);
      }
    })
  }
}
