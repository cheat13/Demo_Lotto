import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {ConfsPage } from '../confs/confs';
import {TradedetailPage} from '../tradedetail/tradedetail';
import { CollectionDetailPage } from '../collection-detail/collection-detail';

@IonicPage()
@Component({
  selector: 'page-tradesell',
  templateUrl: 'tradesell.html',
})
export class TradesellPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TradesellPage');
  }
  
  confs(){
    const confirm = this.alertCtrl.create({
      title: 'Sell item A amount',
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
  back(){
    this.navCtrl.push(TradedetailPage);
  }
  backpage(){
    this.navCtrl.push(CollectionDetailPage); 
  }
}
