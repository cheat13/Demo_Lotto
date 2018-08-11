import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MycollectPage } from '../mycollect/mycollect';
import { CollectionDetailPage } from  '../collection-detail/collection-detail';

/**
 * Generated class for the TradeCollectBuyModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trade-collect-buy-modal',
  templateUrl: 'trade-collect-buy-modal.html',
})
export class TradeCollectBuyModalPage {
  gender:any='THB';
  user:any
  indexGame:number
  indexCol:number
  num:number
  date:string
  amount:number
  thbCurrency:number=60
  usdCurrency:number=1.8
  ethCurrency:number=0.005
  btcCurrency:number=0.00025
  collectNum:number 
  fromDetail:boolean
  constructor(public navCtrl: NavController, public navParams: NavParams, public view:ViewController) {
    this.user = this.navParams.get('user');
    this.indexGame = this.navParams.get('indexGame');
    this.indexCol = this.navParams.get('indexCol');
    this.num = this.navParams.get('num');
    this.date = this.navParams.get('date');
    this.collectNum = this.navParams.get('collectNum');
    this.fromDetail = this.navParams.get('fromDetail');
    this.calAmount();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TradeCollectBuyModalPage');
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
    this.user.collection[this.indexGame].collection[this.indexCol].amount = Number(this.user.collection[this.indexGame].collection[this.indexCol].amount) + Number(this.num);
    this.navCtrl.push((this.fromDetail ? MycollectPage : CollectionDetailPage),{'user':this.user,'index':this.collectNum});
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
  buyCollection(){
    
    this.navCtrl.push((this.fromDetail ? MycollectPage : CollectionDetailPage),{'user':this.user,'index':this.collectNum});
  }
  closeModal(){
    this.view.dismiss();
  }
}
