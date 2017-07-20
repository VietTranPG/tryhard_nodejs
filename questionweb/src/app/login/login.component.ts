import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {DataService} from '../../services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private _appComponent:AppComponent,private _http:DataService) { }

  ngOnInit() {
  }
  login(email,password){
    this._appComponent.showloading = true;
    let url = "users/signin";
    this._http.post(url,{email:email,password:password}).subscribe(res=>{
     this._appComponent.showloading = false;
    });
  }
}
