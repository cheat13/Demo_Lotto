import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SellPage } from '../sell/sell';
import { MembershipPage } from '../membership/membership';
import { AlertController } from 'ionic-angular';
import { MycollectPage } from '../mycollect/mycollect';
import { CollectionDetailPage } from '../collection-detail/collection-detail';

/**
 * Generated class for the CollectionTradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collection-trade',
  templateUrl: 'collection-trade.html',
})
export class CollectionTradePage {
  Trade:string = "buy";
  user:any
  indexGame:number
  indexCol:number
  collectNum:number
  fromDetail:any
  num:number
  sellAmount:number
  sellPrice:number
  date:Date 
  dateNow:string 
  gender:string ='thb' 

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private modal: ModalController) {
    this.user = this.navParams.get('user');
    this.indexGame = this.navParams.get('indexGame');
    this.indexCol = this.navParams.get('indexCol');
    this.collectNum = this.navParams.get('collectNum');
    this.fromDetail = this.navParams.get('from');
    this.date = new Date();
    this.dateNow = this.date.getDate()+"/"+this.date.getMonth()+"/"+this.date.getFullYear();
    console.log(this.fromDetail);

  }
  stpSelect() {
    console.log('STP selected');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TradePage');
  }

  Sell() {
    this.navCtrl.push(SellPage);
  }

  Membership() {
    this.navCtrl.push(MembershipPage,{'user':this.user});
  }

  backpage(){
    this.navCtrl.push((this.fromDetail ? MycollectPage : CollectionDetailPage),{'user':this.user,'index':this.collectNum});
  }
  openModal() {
    const myModal = this.modal.create('TradeCollectBuyModalPage',{'user':this.user,'indexGame':this.indexGame,'indexCol':this.indexCol,'num':this.num,'date':this.dateNow,'collectNum':this.collectNum,'fromDetail':this.fromDetail});
    myModal.present();
  }
  openModalSell(){
    const myModal = this.modal.create('TradeCollectSellModalPage',{'user':this.user,'indexGame':this.indexGame,'indexCol':this.indexCol,'sellAmount':this.sellAmount,'sellPrice':this.sellPrice,'date':this.dateNow,'gender':this.gender,'collectNum':this.collectNum,'fromDetail':this.fromDetail});
    myModal.present();
  }
}
