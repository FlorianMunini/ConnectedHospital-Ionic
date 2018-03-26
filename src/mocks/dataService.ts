import {BluetoothSerial} from "@ionic-native/bluetooth-serial";
import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class DataService {

  url: string = 'http://192.168.43.149:8889/';

  constructor(public http: HttpClient) {


  }



  getDataFromServer(reqOpts?: any) {
    console.log("data seevice")
    return  this.http.get(this.url + '/' , reqOpts);



  }
}




