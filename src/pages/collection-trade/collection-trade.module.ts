import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectionTradePage } from './collection-trade';

@NgModule({
  declarations: [
    CollectionTradePage,
  ],
  imports: [
    IonicPageModule.forChild(CollectionTradePage),
  ],
})
export class CollectionTradePageModule {}
