import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WingamePage } from './wingame';

@NgModule({
  declarations: [
    WingamePage,
  ],
  imports: [
    IonicPageModule.forChild(WingamePage),
  ],
})
export class WingamePageModule {}
