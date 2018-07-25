import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LottogamePage } from './lottogame';

@NgModule({
  declarations: [
    LottogamePage,
  ],
  imports: [
    IonicPageModule.forChild(LottogamePage),
  ],
})
export class LottogamePageModule {}
