import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Signup } from '../signup/signup';
import { DataService } from '../../core/services/data.service';
import { SystemConstants } from '../../core/common/system.constants';
import { UtilityService } from '../../core/services/utility.service';
import { HomeTab } from '../home-tab/home-tab';
import { Storage } from '@ionic/storage';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
declare var localStorage:any; 
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
    let data = { email: email, password: password }
    this._http.login(data).subscribe(res => {
      if (res.status == SystemConstants.STATUS_ERROR) {
        this._utility.alert('Login fail', res.message);
      } else {
        // this._storage.set('user', res.data);
        localStorage.setItem('user',JSON.stringify(res.data));
        this.navCtrl.push(HomeTab).then(() => {
          const index = this.navCtrl.getActive().index;
          this.navCtrl.remove(0, index);
        });
      }
    })
  }
  loginFacebook() {
    console.log(this._fb);
    this._fb.login(["public_profile"])
      .then((res:FacebookLoginResponse) => {
        console.log(res)
        this.navCtrl.push(HomeTab).then(() => {
          const index = this.navCtrl.getActive().index;
          this.navCtrl.remove(0, index);
        });
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }
}
