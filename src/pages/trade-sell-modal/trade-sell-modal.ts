import { Component } from '@angular/core';
import {   NavController, NavParams, ViewController } from 'ionic-angular';
import { TradePage } from '../trade/trade';

 
@Component({
  selector: 'page-trade-sell-modal',
  templateUrl: 'trade-sell-modal.html',
})
export class TradeSellModalPage {
  user:any
  sellAmount:number
  sellPrice:number
  date:string
  gender:string
  total:number
  constructor(public navCtrl: NavController, public navParams: NavParams, public view:ViewController) {
    this.user = this.navParams.get('user');
    this.sellAmount = this.navParams.get('sellAmount');
    this.sellPrice = this.navParams.get('sellPrice');
    this.date = this.navParams.get('date');
    this.gender = this.navParams.get('gender');
    this.total = this.sellPrice*this.sellAmount;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TradeSellModalPage');
  }
  go(){
    this.user.sellHistory.push({
      'date':this.date,
      'sellAmount':this.sellAmount,
      'sellPrice':this.sellPrice +" "+this.gender,
      'total':this.total+" "+this.gender,
      })
    this.user.coins = Number(this.user.coins) -Number(this.sellAmount);
    this.navCtrl.push(TradePage,{'user':this.user});
  }
  closeModal(){
    this.view.dismiss();
  }
}
