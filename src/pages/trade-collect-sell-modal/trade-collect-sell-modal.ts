import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CollectionTradePage } from '../collection-trade/collection-trade';

@IonicPage()
@Component({
  selector: 'page-trade-collect-sell-modal',
  templateUrl: 'trade-collect-sell-modal.html',
})
export class TradeCollectSellModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TradeCollectSellModalPage');
  }
  go(){
    this.navCtrl.push(CollectionTradePage);
  }
  closeModal(){
    this.view.dismiss();
  }
}
