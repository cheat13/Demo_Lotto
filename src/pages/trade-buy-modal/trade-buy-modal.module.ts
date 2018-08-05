import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TradeBuyModalPage } from './trade-buy-modal';

@NgModule({
  declarations: [
    TradeBuyModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TradeBuyModalPage),
  ],
})
export class TradeBuyModalPageModule {}
