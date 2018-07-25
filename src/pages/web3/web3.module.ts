import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Web3Page } from './web3';

@NgModule({
  declarations: [
    Web3Page,
  ],
  imports: [
    IonicPageModule.forChild(Web3Page),
  ],
})
export class Web3PageModule {}
