import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LosegamePage } from './losegame';

@NgModule({
  declarations: [
    LosegamePage,
  ],
  imports: [
    IonicPageModule.forChild(LosegamePage),
  ],
})
export class LosegamePageModule {}
