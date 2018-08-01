import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {ConfsPage } from '../confs/confs';
import {TradedetailPage} from '../tradedetail/tradedetail';
/**
 * Generated class for the TradesellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
}
