import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ConfsPage } from '../confs/confs';
import {TradedetailPage} from '../tradedetail/tradedetail';
/**
 * Generated class for the TradesellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tradesell',
  templateUrl: 'tradesell.html',
})
export class TradesellPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TradesellPage');
  }
  
  confs(){
    this.navCtrl.push(ConfsPage);
  }
  back(){
    this.navCtrl.push(TradedetailPage);
  }
}
