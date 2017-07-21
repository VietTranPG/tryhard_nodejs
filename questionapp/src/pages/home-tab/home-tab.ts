import { Product } from './../product/product';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Weather} from '../weather/weather';
import {Setting} from '../setting/setting'
/**
 * Generated class for the HomeTab page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-tab',
  templateUrl: 'home-tab.html',
})
export class HomeTab {
  weather :any = Weather;
  setting :any = Setting;
  product :any = Product;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeTab');
  }

}
