import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-hoe',
  templateUrl: 'setting.html'
})
export class SettingPage {

  currentItems: any = [];

  @ViewChild('myNav') nav: NavController;

  constructor( public items: Items) { }





}
