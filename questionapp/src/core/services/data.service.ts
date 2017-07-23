import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SystemConstants } from '../../core/common/system.constants';
import { UtilityService } from '../../core/services/utility.service';
import 'rxjs';
@Injectable()
export class DataService {
    loading: any;
    constructor(private _http: Http, private _utility: UtilityService) {

    }
    getOtherUrl(url) {
        this._utility.showLoading();
        return this._http.get(url).map((res: Response) => {
            this._utility.hideLoading();
            return res.json();
        });
    };
    // API FOR REGISTER PAGE
    register(data) {
        this._utility.showLoading();
        let url =SystemConstants.BASE_API + 'user/getRegister';
        return this._http.post(url, data).map((res) => {
            this._utility.hideLoading();
            return res.json();
        })
    };
    // API FOR LOGIN PAGE
    login(data) {
        this._utility.showLoading();        
        var url = SystemConstants.BASE_API + 'user/getLogin';
        return this._http.post(url, data).map(res => {
            this._utility.hideLoading();
            return res.json()
        })
    }
    // API FOR PRODUCT PAGE
    getListProduct() {
        this._utility.showLoading();
        let url = SystemConstants.BASE_API + 'api/getListProduct';
        return this._http.get(url).map((res: Response) => {
            this._utility.hideLoading();
            return res.json()
        })
    }
}