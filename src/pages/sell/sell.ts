import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TradePage } from '../trade/trade';
import { MembershipPage } from '../membership/membership';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sell',
  templateUrl: 'sell.html',
})
export class SellPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellPage');
  }

  Trade(){
    this.navCtrl.push(TradePage);
  }

  Membership(){
    this.navCtrl.push(MembershipPage);
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Sell',
      subTitle: "Amount 100 coin <br> Prise/Unit 100 THB <br> Total 10,000 THB",
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
}
