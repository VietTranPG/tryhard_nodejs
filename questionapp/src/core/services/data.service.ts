import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SystemConstants } from '../../core/common/system.constants';
import { UtilityService } from '../../core/services/utility.service';
import { LoadingController } from 'ionic-angular';
import 'rxjs';
@Injectable()
export class DataService {
    loading: any;
    constructor(private _http: Http, private _loadingCtrl: LoadingController, private utility: UtilityService) {

    }
    get(url: string) {
        this.utility.showLoading();
        return this._http.get(SystemConstants.BASE_API + url).map((res: Response) => {
            this.utility.hideLoading();
            return res.json();
        });
    };
    post(url: string, body?: any) {
        this.utility.showLoading();
        return this._http.post(SystemConstants.BASE_API + url, body).map((res: Response) => {
            this.utility.hideLoading();
            return res.json();
        });
    };
    getNoLoading(url: string) {

    };
    postNoLoading(url: string) {

    };
}