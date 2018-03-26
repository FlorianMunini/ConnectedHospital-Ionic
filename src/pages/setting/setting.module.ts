import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import {SettingPage} from "./setting";



@NgModule({
  declarations: [
    SettingPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingPage),
    TranslateModule.forChild()
  ],
  exports: [
    SettingPage
  ]
})
export class HomePageModule { }
