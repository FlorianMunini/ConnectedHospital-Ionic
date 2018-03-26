import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import {BluetoothPage} from "./bluetooth";



@NgModule({
  declarations: [
    BluetoothPage,
  ],
  imports: [
    IonicPageModule.forChild(BluetoothPage),
    TranslateModule.forChild()
  ],
  exports: [
    BluetoothPage
  ]
})
export class HomePageModule { }
