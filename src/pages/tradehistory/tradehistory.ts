import { Component } from '@angular/core';
import {   NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TradehistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-tradehistory',
  templateUrl: 'tradehistory.html',
})
export class TradehistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TradehistoryPage');
  }

}
