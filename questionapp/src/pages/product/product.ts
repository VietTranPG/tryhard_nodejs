import { DataService } from './../../core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Product page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class Product {
  listProduct: Array<Object>
  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: DataService) {

  }
  ionViewDidEnter() {
    this.getProductList();
  }
  getProductList() {
    this._http.getListProduct().subscribe(res => {
      this.listProduct = res.data;
      console.log(res)
    });
  }
}
