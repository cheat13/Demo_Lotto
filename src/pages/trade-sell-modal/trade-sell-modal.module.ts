import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TradeSellModalPage } from './trade-sell-modal';

@NgModule({
  declarations: [
    TradeSellModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TradeSellModalPage),
  ],
})
export class TradeSellModalPageModule {}
