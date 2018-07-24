import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TradePage } from '../trade/trade';
import { ConfirmSellPage } from '../confirm-sell/confirm-sell';
import { MembershipPage } from '../membership/membership';

/**
 * Generated class for the SellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sell',
  templateUrl: 'sell.html',
})
export class SellPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellPage');
  }

  Trade(){
    this.navCtrl.push(TradePage);
  }

  ConfirmSell(){
    this.navCtrl.push(ConfirmSellPage);
  }

  Membership(){
    this.navCtrl.push(MembershipPage);
  }
}
