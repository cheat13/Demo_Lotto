import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CollectionTradePage } from '../collection-trade/collection-trade';

/**
 * Generated class for the TradeCollectBuyModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trade-collect-buy-modal',
  templateUrl: 'trade-collect-buy-modal.html',
})
export class TradeCollectBuyModalPage {
  gender:any='thb';
  constructor(public navCtrl: NavController, public navParams: NavParams, public view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TradeCollectBuyModalPage');
  }
  go(){
    this.navCtrl.push(CollectionTradePage);
  }
  closeModal(){
    this.view.dismiss();
  }
}
