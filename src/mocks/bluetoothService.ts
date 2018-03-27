import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import {BluetoothSerial} from "@ionic-native/bluetooth-serial";




@Injectable()
export class VelibService {




  constructor( private bluetoothSerial: BluetoothSerial) {

    console.log(this.bluetoothSerial.list());
  }




}
