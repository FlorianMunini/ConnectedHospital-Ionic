import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController} from 'ionic-angular';


import { Items } from '../../providers/providers';
import {BluetoothSerial} from "@ionic-native/bluetooth-serial";
import {Observable} from "rxjs/Observable";

@IonicPage()
@Component({
  selector: 'page-hoe',
  templateUrl: 'bluetooth.html'
})
export class BluetoothPage implements OnInit{

  currentItems: any = [];
  private getDataObserver: any;
  public getData: any;

  unpairedDevices: any;
  pairedDevices: any;
  @ViewChild('myNav') nav: NavController
  gettingDevices: Boolean;
  success = (data) => alert(data);
  fail = (error) => alert(error);

  constructor( public items: Items, private bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController) {
    this.bluetoothSerial.enable();
    this.getData = Observable.create(observer => {
      this.getDataObserver = observer;
    });
  }



  ngOnInit() {
    console.log('bluetooth');

    this.startScanning();




  }



 public startScanning() {
    this.pairedDevices = null;
    this.unpairedDevices = null;
    this.gettingDevices = true;
    this.bluetoothSerial.discoverUnpaired().then((success) => {
        this.unpairedDevices = success;
        this.gettingDevices = false;
        success.forEach(element => {
          // alert(element.name);
          console.log(element.name);
        });
      },
      (err) => {
        console.log(err);
      })

    this.bluetoothSerial.list().then((success) => {
        this.pairedDevices = success;
      },
      (err) => {

      })
  }


  public selectDevice(address: any) {

    let alert = this.alertCtrl.create({
      title: 'Connect',
      message: 'Do you want to connect with?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Connect',
          handler: () => {
            this.bluetoothSerial.connect(address).subscribe(val =>{
              console.log(val);

            },
              (err) => {
                console.log(err);

              });
           // this.getDataObserver.next();



          }
        }
      ]
    });
    alert.present();

  }

  public disconnect() {
    let alert = this.alertCtrl.create({
      title: 'Disconnect?',
      message: 'Do you want to Disconnect?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Disconnect',
          handler: () => {
            this.bluetoothSerial.disconnect();
          }
        }
      ]
    });
    alert.present();
  }









}
