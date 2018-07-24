import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SellPage } from '../sell/sell';

/**
 * Generated class for the ConfirmSellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm-sell',
  templateUrl: 'confirm-sell.html',
})
export class ConfirmSellPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmSellPage');
  }

  Sell(){
    this.navCtrl.push(SellPage);
  }
}
