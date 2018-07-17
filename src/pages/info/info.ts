import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {
  
  lat: any;
  lng: any;
  alt: any;
  spd: any;
  brg: any;
  sat: any;

  constructor(public navCtrl: NavController, public geo: Geolocation) {

  }

  ionViewDidLoad() {
    this.geo.getCurrentPosition({enableHighAccuracy: true }).then(pos => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
      this.alt = pos.coords.altitude;
      this.spd = pos.coords.speed;
      this.brg = pos.coords.heading;

    }).catch(err => console.log(err));
  }
}