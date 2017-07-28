import { Injectable } from '@angular/core';
import { AppComponent } from '../app/app.component';
declare var sweetAlert:any;
@Injectable()
export class UtilityService {
    constructor() {

    }
    showLoading() {
        // this._appComponent.showloading = true;
    }
    hideLoading() {
        // this._appComponent.showloading = false;
    }
    showAlert(title, message, type) {
        sweetAlert(title, message, type);
    }
}