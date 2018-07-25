import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectionDetailPage } from './collection-detail';

@NgModule({
  declarations: [
    CollectionDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CollectionDetailPage),
  ],
})
export class CollectionDetailPageModule {}
