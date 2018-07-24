import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmSellPage } from './confirm-sell';

@NgModule({
  declarations: [
    ConfirmSellPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmSellPage),
  ],
})
export class ConfirmSellPageModule {}
