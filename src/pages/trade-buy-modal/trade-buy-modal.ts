import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TradePage } from '../trade/trade';

@IonicPage()
@Component({
  selector: 'page-trade-buy-modal',
  templateUrl: 'trade-buy-modal.html',
})
export class TradeBuyModalPage {
  gender:string = "thb";
  constructor(public navCtrl: NavController, public navParams: NavParams, public view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TradeBuyModalPage');
  }
  go(){
    this.navCtrl.push(TradePage);
  }
  closeModal(){
    this.view.dismiss();
  }
}
