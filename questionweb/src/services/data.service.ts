import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UtilityService } from './utility.service';
import { Observable } from 'rxjs/Rx';
import { AppComponent } from '../app/app.component';
import 'rxjs';
declare var swal: any;
@Injectable()
export class DataService {
    loading: any;
    API_URL: string = "http://localhost:3000/";
    constructor(private _http: Http, private utility: UtilityService, private _appComponent: AppComponent) {

    }
    get(url: string) {
        this.utility.showLoading();
        return this._http.get(this.API_URL + url)
            .map(res => res.json())
            .catch(this._handleError)
    }
    post(u: string, body: any) {
        let url =  this.API_URL + u;
        return this._http.post(url, body)
            .map(res => res.json())

    }
    private _handleError(e) {
        return Observable.throw(
            new Error(`${e.status} ${e.statusText}`)
        );
    }
}