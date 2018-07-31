import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TradedetailPage } from '../tradedetail/tradedetail';
/**
 * Generated class for the DetailcollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailcollection',
  templateUrl: 'detailcollection.html',
})
export class DetailcollectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailcollectionPage');
  }
  tr(){
    this.navCtrl.push(TradedetailPage);
  }
}
