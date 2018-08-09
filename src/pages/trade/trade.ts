import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SellPage } from '../sell/sell';
import { MembershipPage } from '../membership/membership';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-trade',
  templateUrl: 'trade.html',
})
export class TradePage {
  Trade: string = "buy";
  user:any
  num:number
  page: number
  gender:string ='thb'
  sellAmount:number
  sellPrice:number
  date:Date 
  dateNow:string  
  thbCurrency:number=100
  usdCurrency:number=2
  ethCurrency:number=1
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,private modal: ModalController) {
    this.user = this.navParams.get('user');
    this.page = this.navParams.get('page');
    this.date = new Date();
    this.dateNow = this.date.getDate()+"/"+this.date.getMonth()+"/"+this.date.getFullYear();
  
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

  showConfirm() {
    const myModal = this.modal.create('TradeBuyModalPage',{'user':this.user,'num':this.num,'date':this.dateNow});
    myModal.present();
  }

  showConfirmSell() {
    const myModal = this.modal.create('TradeSellModalPage',{'user':this.user,'sellAmount':this.sellAmount,'sellPrice':this.sellPrice,'date':this.dateNow,'gender':this.gender});
    myModal.present();
  }

  calAmount() {
    
    if (this.gender == 'thb') {
      this.sellPrice = this.sellPrice * this.thbCurrency;
    } else if(this.gender =='usd') {
      this.sellPrice = this.sellPrice * this.usdCurrency;
    } else if(this.gender == 'eth'){
      this.sellPrice = this.sellPrice * this.ethCurrency;
    } 
  }
  backpage() {
    this.navCtrl.push(MembershipPage,{'user':this.user});
  }
}
