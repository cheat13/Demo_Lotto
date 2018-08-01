import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfbPage } from './confb';

@NgModule({
  declarations: [
    ConfbPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfbPage),
  ],
})
export class ConfbPageModule {}
