import { UtilityService } from './../../services/utility.service';
import { SystemConstants } from './../../common/system.constants';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { DataService } from '../../services/data.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  constructor(private _appComponent: AppComponent, private _http: DataService,private _utilityService:UtilityService,private _router:Router) { }

  ngOnInit() {
  }

  login(email:string, password:string) {
    this._appComponent.showloading = true;
    let url = "users/signin";
    this._http.post(url, { email: email, password: password }).subscribe(res => {
      console.log(res);
      if (res.Status == SystemConstants.STATUS_ERROR) {
        this._utilityService.showAlert('Oops...',res.Message,'error');
      } else {
        this._router.navigate(['/main']);
      }
    },
      error => { 
        this._appComponent.showloading = false;
         this._utilityService.showAlert('Oops...',SystemConstants.REQUEST_TIMEOUT,'error');
      },
      () => this._appComponent.showloading = false
    )
  }
}
