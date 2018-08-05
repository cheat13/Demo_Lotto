import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TradePage } from '../trade/trade';

@IonicPage()
@Component({
  selector: 'page-trade-sell-modal',
  templateUrl: 'trade-sell-modal.html',
})
export class TradeSellModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TradeSellModalPage');
  }
  go(){
    this.navCtrl.push(TradePage);
  }
  closeModal(){
    this.view.dismiss();
  }
}
