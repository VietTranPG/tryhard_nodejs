import { Injectable } from '@angular/core';
import { LoadingController,AlertController  } from 'ionic-angular';
@Injectable()
export class UtilityService {
    loading: any;
    constructor(public loadingCtrl: LoadingController,private alertCtrl: AlertController) { }
    showLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Đợi tý nhé ....'
        });
        this.loading.present();
    };
    hideLoading() {
        this.loading.dismiss();
    };
    alert(title,message) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }

}