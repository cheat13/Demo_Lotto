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
  gender:any='thb';
  user:any
  indexGame:number
  indexCol:number
  num:number
  date:string
  amount:number
  thbCurrency:number=100
  usdCurrency:number=2
  ethCurrency:number=1
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
    this.user.collection[this.indexGame].collection[this.indexCol].amount = Number(this.user.collection[this.indexGame].collection[this.indexCol].amount) + Number(this.num);
    this.user.money = Number(this.user.money) - Number(this.amount);
    this.navCtrl.push((this.fromDetail ? MycollectPage : CollectionDetailPage),{'user':this.user,'index':this.collectNum});
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
  buyCollection(){
    
    this.navCtrl.push((this.fromDetail ? MycollectPage : CollectionDetailPage),{'user':this.user,'index':this.collectNum});
  }
  closeModal(){
    this.view.dismiss();
  }
}
