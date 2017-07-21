import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { DataService } from '../../core/services/data.service';
/**
 * Generated class for the Weather page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var google: any;
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
  providers: [Geolocation]
})
export class Weather {
  map: any;
  marker: any;
  title: string = "Your Location";
  temp: number = 0;
  humidity: number = 0;
  weatherStatus: string = "";
  defaultLocation: {
    lat: any,
    lng: any
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private _http: DataService, private zone: NgZone) {
    this.defaultLocation = {
      lat: 21.0138004,
      lng: 105.7996538
    }
  }
  ionViewDidLoad() {
    this.getcurrentlocation();
  }
  getcurrentlocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.getWeather(resp.coords.latitude, resp.coords.longitude)
      this.loadMap(resp.coords.latitude, resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
      this.getWeather(this.defaultLocation.lat, this.defaultLocation.lng)
      this.loadMap(this.defaultLocation.lat, this.defaultLocation.lng);
    });
  };
  getWeather(lat, lng) {
    let url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&appid=7fc238c336327057911fb1b44ed4cd87";
    this._http.getOtherUrl(url).subscribe((res) => {
      console.log(res);
      this.temp = this.convertTemp(res.main.temp);
      this.humidity = res.main.humidity;
      this.weatherStatus = res.weather.pop().description;
    })
  };
  ngAfterViewInit() {

  }
  loadMap(lat, lng) {
    let autocompleteInput = document.getElementById('autocomplete').getElementsByTagName('input')[0];
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: lat, lng: lng },
      zoom: 12
    });
    let autocomplete = new google.maps.places.Autocomplete(autocompleteInput);

    autocomplete.addListener('place_changed', () => {
      this.zone.run(() => {
        let place = autocomplete.getPlace();
        console.log(place);
        if (place.geometry) {
          let latSearch = place.geometry.location.lat();
          let lngSearch = place.geometry.location.lng();
          this.title = place.formatted_address;
          this.marker.setMap(null);
          this.map.setCenter({ lat: latSearch, lng: lngSearch });
          this.setMarker(latSearch, lngSearch);
          this.getWeather(latSearch, lngSearch);
        }
      });
    });
    this.setMarker(lat, lng);
  }
  setMarker(lat, lng) {
    this.marker = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: this.map
    });
  };
  convertTemp(kelvinTemp) {
    return Math.round(kelvinTemp - 273.15);
  }
};

