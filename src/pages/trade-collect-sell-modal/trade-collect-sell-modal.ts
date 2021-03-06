import { Component } from '@angular/core';
import {   NavController, NavParams, ViewController } from 'ionic-angular';
import { MycollectPage } from '../mycollect/mycollect';
import { CollectionDetailPage } from  '../collection-detail/collection-detail';

 
@Component({
  selector: 'page-trade-collect-sell-modal',
  templateUrl: 'trade-collect-sell-modal.html',
})
export class TradeCollectSellModalPage {
  gender:any='THB';
  user:any
  indexGame:number
  indexCol:number
  sellAmount:number
  sellPrice:number
  date:string
  thbCurrency:number=60
  usdCurrency:number=1.8
  ethCurrency:number=0.005
  btcCuurency:number = 0.00025
  collectNum:number 
  fromDetail:boolean
  total:number
  constructor(public navCtrl: NavController, public navParams: NavParams, public view:ViewController) {
    this.user = this.navParams.get('user');
    this.indexGame = this.navParams.get('indexGame');
    this.indexCol = this.navParams.get('indexCol');
    this.sellAmount = this.navParams.get('sellAmount');
    this.sellPrice = this.navParams.get('sellPrice');
    this.date = this.navParams.get('date');
    this.collectNum = this.navParams.get('collectNum');
    this.fromDetail = this.navParams.get('fromDetail');
    this.total = this.sellAmount*this.sellPrice;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TradeCollectSellModalPage');
  }
  go(){
    this.user.collection[this.indexGame].collection[this.indexCol].amount -= this.sellAmount ;
    this.navCtrl.push((this.fromDetail ? MycollectPage : CollectionDetailPage),{'user':this.user,'index':this.collectNum});
  }
  
  closeModal(){
    this.view.dismiss();
  }
}
