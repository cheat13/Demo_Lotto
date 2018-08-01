import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ConfPage } from '../conf/conf';
import { MembershipPage } from '../membership/membership';
import { ConfbPage } from '../confb/confb';
/**
 * Generated class for the BuyCollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy-collection',
  templateUrl: 'buy-collection.html',
})
export class BuyCollectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  /** presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Do you want to buy this item ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
    
  } */
  con(){
    this.navCtrl.push(ConfbPage);
  }

  Membership(){
    this.navCtrl.push(MembershipPage);
  }

}
