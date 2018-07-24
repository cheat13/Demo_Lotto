import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SellPage } from '../sell/sell';
import { ConfirmPage } from '../confirm/confirm';
import { MembershipPage } from '../membership/membership';

/**
 * Generated class for the TradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trade',
  templateUrl: 'trade.html',
})
export class TradePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TradePage');
  }

  Sell(){
    this.navCtrl.push(SellPage);
  }

  Confirm(){
    this.navCtrl.push(ConfirmPage);
  }

  Membership(){
    this.navCtrl.push(MembershipPage);
  }
}
