import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
  @ViewChild('myNav') nav: NavController;

  constructor() { }

}
