import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SellPage } from '../sell/sell';
import { MembershipPage } from '../membership/membership';
import { AlertController } from 'ionic-angular';
import { SuccessPage } from '../success/success';

/**
 * Generated class for the TradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trade',
  templateUrl: 'trade.html',
})
export class TradePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
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
      subTitle: "<h5>100 coin</h5> 10,000 THB",
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
            this.navCtrl.push(SuccessPage);
          }
        }
      ]
    });
    confirm.present();
  }
  
  showConfirmSell() {
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
  backpage(){
    this.navCtrl.push(MembershipPage);
  }
}
