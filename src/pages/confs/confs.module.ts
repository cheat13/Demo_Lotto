import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfsPage } from './confs';

@NgModule({
  declarations: [
    ConfsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfsPage),
  ],
})
export class ConfsPageModule {}
