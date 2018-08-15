import { Component } from '@angular/core';
import {   NavController, NavParams, ViewController } from 'ionic-angular';
import { TradePage } from '../trade/trade';

 
@Component({
  selector: 'page-trade-buy-modal',
  templateUrl: 'trade-buy-modal.html',
})
export class TradeBuyModalPage {
  user:any
  num:number
  date:string
  gender:string = "THB";
  amount:number
  thbCurrency:number=60
  usdCurrency:number=1.8
  ethCurrency:number=0.005
  btcCurrency:number=0.00025

  fromDetail:boolean
  constructor(public navCtrl: NavController, public navParams: NavParams, public view:ViewController) {
    this.user = this.navParams.get('user');
    this.num = this.navParams.get('num');
    this.date = this.navParams.get('date');
    this.fromDetail = this.navParams.get('fromDetail');
    this.calAmount();
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad TradeBuyModalPage');
  }
  go(){
    if (this.gender == 'THB') {
      this.user.money -= this.amount;
    } else if (this.gender == 'USD') {
      this.user.moneyUSD -= this.amount;
    } else if(this.gender == 'ETH'){
      this.user.ethereum -= this.amount;
    }else {
      this.user.moneyBTC -= this.amount;
    }
    this.user.buyHistory.push({
      'date':this.date,
      'num':this.num,
      'total':this.amount+" "+this.gender,
      'unit': this.gender=='THB' ? this.thbCurrency+" "+this.gender : this.gender=='USD' ? this.usdCurrency+" "+this.gender : this.gender=='ETH' ? this.ethCurrency+" "+this.gender : this.btcCurrency+" "+this.gender })
    this.user.coins = Number(this.user.coins) +Number(this.num);
    this.navCtrl.push(TradePage,{'user':this.user});
  }

  calAmount() {
    
    if (this.gender == 'THB') {
      this.amount = this.num * this.thbCurrency;
    } else if(this.gender =='USD') {
      this.amount = this.num * this.usdCurrency;
    } else if(this.gender == 'ETH'){
      this.amount = this.num * this.ethCurrency;
    } else{
      this.amount = this.num * this.btcCurrency;
    }
  }

 

  closeModal(){
    this.view.dismiss();
  }
}
