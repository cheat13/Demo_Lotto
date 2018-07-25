import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfPage } from '../conf/conf';
import { TradesellPage } from '../tradesell/tradesell';
/**
 * Generated class for the TradedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tradedetail',
  templateUrl: 'tradedetail.html',
})
export class TradedetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TradedetailPage');
  }
  conf(){
    this.navCtrl.push(ConfPage);
  }
  ts(){
    this.navCtrl.push(TradesellPage);
  }
}
