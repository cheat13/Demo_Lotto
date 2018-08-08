import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TradePage } from '../trade/trade';

@IonicPage()
@Component({
  selector: 'page-trade-buy-modal',
  templateUrl: 'trade-buy-modal.html',
})
export class TradeBuyModalPage {
  user:any
  num:number
  date:string
  gender:string = "thb";
  amount:number
  thbCurrency:number=100
  usdCurrency:number=2
  ethCurrency:number=1
  constructor(public navCtrl: NavController, public navParams: NavParams, public view:ViewController) {
    this.user = this.navParams.get('user');
    this.num = this.navParams.get('num');
    this.date = this.navParams.get('date');
    this.calAmount();
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad TradeBuyModalPage');
  }
  go(){
    if (this.gender == 'thb') {
      this.user.money -= this.amount;
    } else if (this.gender == 'usd') {
      this.user.moneyUSD -= this.amount;
    } else if(this.gender == 'eth'){
      this.user.ethereum -= this.amount;
    }
    this.user.buyHistory.push({
      'date':this.date,
      'num':this.num,
      'total':this.amount+" "+this.gender,
      'unit': this.gender=='thb' ? this.thbCurrency+" "+this.gender : this.gender=='usd' ? this.usdCurrency+" "+this.gender : this.ethCurrency+" "+this.gender})
    this.user.coins = Number(this.user.coins) +Number(this.num);
    this.navCtrl.push(TradePage,{'user':this.user});
  }

  calAmount() {
    
    if (this.gender == 'thb') {
      this.amount = this.num * this.thbCurrency;
    } else if(this.gender =='usd') {
      this.amount = this.num * this.usdCurrency;
    } else if(this.gender == 'eth'){
      this.amount = this.num * this.ethCurrency;
    } 
  }

  closeModal(){
    this.view.dismiss();
  }
}
