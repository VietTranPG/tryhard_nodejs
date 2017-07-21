import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Signup } from '../signup/signup';
import { DataService } from '../../core/services/data.service';
import { SystemConstants } from '../../core/common/system.constants';
import { UtilityService } from '../../core/services/utility.service';
import { HomeTab } from '../home-tab/home-tab';
import { Storage } from '@ionic/storage';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Facebook]
})
export class Login {
  email: string;
  password: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: DataService,
    private _utility: UtilityService, private _storage: Storage, private _fb: Facebook) {
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
    this._http.login(email,password).subscribe(res => {
      if (res.status == SystemConstants.STATUS_ERROR) {
        this._utility.alert('Login fail', res.message);
      } else {
        this._storage.set('user', res.data);
        this.navCtrl.push(HomeTab).then(() => {
          const index = this.navCtrl.getActive().index;
          this.navCtrl.remove(0, index);
        });
      }
    })
  }
  loginFacebook() {
    this._fb.login(["public_profile", "email", "user_friends"])
      .then((res: FacebookLoginResponse) => {
        this.navCtrl.push(HomeTab).then(() => {
          const index = this.navCtrl.getActive().index;
          this.navCtrl.remove(0, index);
        });
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }
}
