import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TradePage } from '../trade/trade';
import { MembershipPage } from '../membership/membership';

/**
 * Generated class for the SuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-success',
  templateUrl: 'success.html',
})
export class SuccessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuccessPage');
  }

  Trade(){
    this.navCtrl.push(TradePage);
  }

  Membership(){
    this.navCtrl.push(MembershipPage);
  }
}
