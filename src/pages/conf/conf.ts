import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TradedetailPage } from '../tradedetail/tradedetail';
/**
 * Generated class for the ConfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conf',
  templateUrl: 'conf.html',
})
export class ConfPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfPage');
  }
  back(){
    this.navCtrl.push(TradedetailPage);
  }
}
