import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CollectionTradePage } from '../collection-trade/collection-trade';
import { MycollectPage } from '../mycollect/mycollect';
import { CollectionDetailPage } from  '../collection-detail/collection-detail';

@IonicPage()
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
  thbCurrency:number=100
  usdCurrency:number=2
  ethCurrency:number=1
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
