import { Component } from '@angular/core';
import {   NavController, NavParams,AlertController } from 'ionic-angular';
import { TradesellPage } from '../tradesell/tradesell';
import { DetailcollectionPage } from '../detailcollection/detailcollection';

 
@Component({
  selector: 'page-tradedetail',
  templateUrl: 'tradedetail.html',
})
export class TradedetailPage {
  Trade = "buy";
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TradedetailPage');
  }
  conf(){
    const confirm = this.alertCtrl.create({
      title: 'Buy item A amount',
      subTitle: "<h5><center>5 </h5><center> 500 THB",
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
            console.log('Agree clicked');
            
          }
        }
      ]
    });
    confirm.present();
  }
  ts(){
    this.navCtrl.push(TradesellPage);
  }
  backpage(){
    this.navCtrl.push(DetailcollectionPage);
  }
}
