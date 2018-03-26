import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import {RaspiPage} from "./raspi";



@NgModule({
  declarations: [
    RaspiPage,
  ],
  imports: [
    IonicPageModule.forChild(RaspiPage),
    TranslateModule.forChild()
  ],
  exports: [
    RaspiPage
  ]
})
export class HomePageModule { }
