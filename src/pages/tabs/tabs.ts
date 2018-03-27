import {Component, ViewChild} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavController } from 'ionic-angular';


import {Tab1Root,  Tab2Root} from '../pages';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  
  tab2Root: any = Tab2Root;

  @ViewChild('myNav') nav: NavController;


  tab1Title = " ";
  tab2Title = " ";
 


  constructor( public translateService: TranslateService) {

    this.tab1Title = 'Home';
      
    this.tab2Title = "bluetooth";
   
  }
}
