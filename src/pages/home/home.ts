import {Component, OnInit, ViewChild} from '@angular/core';
import {Events, IonicPage, NavController} from 'ionic-angular';


import { Items } from '../../providers/providers';
import {BluetoothPage} from "../bluetooth/bluetooth";
import {BluetoothSerial} from "@ionic-native/bluetooth-serial";
import {DataService} from "../../mocks/dataService";
import {ShareService} from "../../mocks/ShareService";
import {Data} from "../../mocks/Data";
import {CompleteTestService} from "../../mocks/CompleteTestService";
import {AutoCompleteComponent} from "ionic2-auto-complete";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/interval';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  user: String;

  dataArrayTotal: Data[] = [];
  dataArrayPatient: Data[] = [];
  maladeArray: any = [];
  @ViewChild('patient')
  patient: AutoCompleteComponent;

  currentItems: any = [];
  @ViewChild('myNav') nav: NavController;

  constructor(  public items: Items, public bluetoothDevice: BluetoothPage,private bluetoothSerial: BluetoothSerial,private data: DataService,public events: Events,public shareService: ShareService,public autoComplete: CompleteTestService) {






  }
  ngOnInit () {

    this.user = this.shareService.getUser();
    this.getMalade()

    Observable.interval(10000).subscribe(() => this.getMalade());





}

public getMalade(){
  this.data.getDataFromServer().subscribe((res: any) => {
    this.dataArrayTotal = res;
    // If the API returned a successful response, mark the user as logged in
    for(let entry of res){
      console.log("user"+entry.lastname);
      let bool = 0 ;

      // this.dataArray.push(new Data(entry.bpm,entry.glycemia,entry.temperature,entry.bloodPressure,entry.date2,entry.firstname,entry.lastname));
      for(let name of this.maladeArray){
        if((entry.lastname+' '+entry.firstname)==name.name){
          bool =1;
        }
      }
      if(bool == 0){
        this.maladeArray.push({name: entry.lastname+' '+entry.firstname});
      }

      for(let entry of this.maladeArray){
        console.log(entry.name);
      }


    }
    this.autoComplete.setMalade(this.maladeArray);


  }, err => {
    //console.error('ERROR', err);
    console.log(err);
  });
}
public done(){


}

  ionViewDidEnter() {
    this.bluetoothSerial.list().then((success) => {
      success.forEach(element => {
        // alert(element.name);
        console.log(element.name);
      });
    });
    this.bluetoothSerial.subscribeRawData().subscribe(lol =>{
      console.log("lol");
    });

    this.bluetoothSerial.isConnected().then(res => {
      console.log(res);
    }).catch(res => {
      console.log('Fail2!');
      console.log(res);
    });
  }

  public showPat(){

    Observable.interval(10000).subscribe(() => this.getDataPat());




  }


  public getDataPat(){


    this.dataArrayPatient = [];

    console.log(this.patient.getSelection());

    for(let entry of this.dataArrayTotal){
      if((entry.lastname+' '+entry.firstname)==(this.patient.getSelection().name)){
        this.dataArrayPatient.push(entry);
      }
    }
  }












}
