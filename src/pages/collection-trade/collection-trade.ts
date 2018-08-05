import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SellPage } from '../sell/sell';
import { MembershipPage } from '../membership/membership';
import { AlertController } from 'ionic-angular';
import { SuccessPage } from '../success/success';
import { MycollectPage } from '../mycollect/mycollect';

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
  index:number
  num:number
  sellAmount:number
  sellPrice:number
  date:Date 
  dateNow:string  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.user = this.navParams.get('user');
    this.index = this.navParams.get('index');
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
    this.navCtrl.push(MembershipPage);
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Buy coin amount',
      subTitle: "<h5>"+ this.num +" coin</h5>"+ this.num* 100 +" THB",
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.buyCollection();
            console.log('Agree clicked');
            
          }
        }
      ]
    });
    confirm.present();
  }
  
  showConfirmSell() {
    const confirm = this.alertCtrl.create({
      title: 'Sell',
      subTitle: "Amount " + this.sellAmount + " coin <br> Price/Unit " +this.sellPrice+ " THB <br> Total " + this.sellAmount*this.sellPrice + " THB",
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.sellCollection();
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  buyCollection(){
    this.user.collection[this.index].amount = this.num;
    this.user.money = Number(this.user.money) - Number(this.num*100);
    this.navCtrl.push(MycollectPage,{'user':this.user});
  }

  sellCollection(){
    this.user.collection[this.index].amount -= this.sellAmount ;
    this.navCtrl.push(MycollectPage,{'user':this.user});

  }

  backpage(){
    this.navCtrl.push(MycollectPage,{'user':this.user});
  }
}
