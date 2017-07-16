import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { UtilityService } from '../../core/services/utility.service';
import { DataService } from '../../core/services/data.service';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
/**
 * Generated class for the Weather page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
  providers: [Geolocation]
})
export class Weather {
  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private utility: UtilityService, private _http: DataService, private googleMaps: GoogleMaps) {

  }

  ionViewDidLoad() {
    this.getcurrentlocation();

  }
  getcurrentlocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.getWeather(resp.coords.latitude, resp.coords.longitude)
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  };
  getWeather(lat, lng) {
    let url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&appid=7fc238c336327057911fb1b44ed4cd87";
    this._http.getOtherUrl(url).subscribe((res) => {
      console.log(res);
    })
  };
  ngAfterViewInit() {
    this.loadMap();
  }
  loadMap() {
    // make sure to create following structure in your view.html file
    // and add a height (for example 100%) to it, else the map won't be visible
    // <ion-content>
    //  <div #map id="map" style="height:100%;"></div>
    // </ion-content>

    // create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map');
    let map: GoogleMap = this.googleMaps.create(element);

    // listen to MAP_READY event
    // You must wait for this event to fire before adding something to the map or modifying it in anyway
    map.one(GoogleMapsEvent.MAP_READY).then(
      () => {
        console.log('Map is ready!');
        // Now you can add elements to the map like the marker
      }
    ).catch((err) => { console.log(err) });
    let ionic: LatLng = new LatLng(43.0741904, -89.3809802);

    // create CameraPosition
    let position: CameraPosition = {
      target: ionic,
      zoom: 18,
      tilt: 30
    };

    // move the map's camera to position
    map.moveCamera(position);

    // create new marker
    let markerOptions: MarkerOptions = {
      position: ionic,
      title: 'Ionic'
    };
  }
};

