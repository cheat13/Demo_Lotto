import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { ConfPage } from '../conf/conf';
import { TradesellPage } from '../tradesell/tradesell';
/**
 * Generated class for the TradedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tradedetail',
  templateUrl: 'tradedetail.html',
})
export class TradedetailPage {

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
}
