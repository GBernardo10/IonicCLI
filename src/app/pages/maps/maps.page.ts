import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';

declare var google;


@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})

export class MapsPage implements OnInit {
  map: any;

  latitude: any;
  longitude: any;
  mapa: GoogleMap;


  geoInfo: any = {
    resp: '',
    data: ''
  };
  @ViewChild('mapElement') mapNativeElement: ElementRef;

  constructor(private geolocation: Geolocation) { }
  ngOnInit() {
    // this.ionViewDidLoad()
    this.loadMap()
    this.maps()
  }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition()
      .then((resp) => {
        const position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

        const mapOptions = {
          zoom: 18,
          center: position
        }

        this.mapa = new google.maps.Map(document.getElementById('mapa'), mapOptions);

        const marker = new google.maps.Marker({
          position: position,
          mapa: this.mapa
        });

      }).catch((error) => {
        console.log('Erro ao recuperar sua posição', error);
      });
  }
  loadMap() {

    // This code is necessary for browser
    // Environment.setEnv({
    //   'API_KEY_FOR_BROWSER_RELEASE': '(AIzaSyD5XdMfPa17wnCH7Pub-O_v24E5LspsmDg)',
    //   'API_KEY_FOR_BROWSER_DEBUG': '(AIzaSyD5XdMfPa17wnCH7Pub-O_v24E5LspsmDg)'
    // });

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.mapa = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.mapa.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }

  maps() {

    this.geolocation.getCurrentPosition().then((resp) => {
      // this.geoInfo.resp = JSON.stringify(resp);
      resp.coords.latitude
      resp.coords.longitude
      console.log(resp.coords.latitude)
      console.log(resp.coords.longitude)
    }).catch((error) => {
      console.log('Error getting location', error);
      // this.geoInfo.resp = 'Error getting location';
    })

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // this.geoInfo.data = JSON.stringify(data)
      data.coords.latitude
      data.coords.longitude
      console.log(data.coords.latitude)
      console.log(data.coords.longitude)

    })
  }
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   resp.coords.latitude
    //   resp.coords.longitude
    // }).catch((error) => {
    //   console.log('Error getting location', error);
    // })

    // let watch = this.geolocation.watchPosition();
    // watch.subscribe((data) => {
    //   data.coords.latitude
    //   data.coords.longitude
    // }) 
}
