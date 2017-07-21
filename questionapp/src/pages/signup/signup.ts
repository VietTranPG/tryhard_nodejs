import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SystemConstants } from '../../core/common/system.constants';
import { UtilityService } from '../../core/services/utility.service';
import { DataService } from '../../core/services/data.service';
import {Login} from '../login/login';
/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: DataService, private utility: UtilityService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }
  register(name, email, password) {
    let url = 'user/getRegister';
    let body = {
      name: name,
      email: email,
      password: password
    }
    this._http.register(body).subscribe((res) => {
      if (res.status == SystemConstants.STATUS_ERROR) {
        this.utility.alert('Signup fail',res.message);
      }else{
        this.navCtrl.push(Login,{
          email:body.email,
          password:body.password
        })
      }
    })
  };
}
