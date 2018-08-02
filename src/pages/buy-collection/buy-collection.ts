import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ConfPage } from '../conf/conf';
import { MembershipPage } from '../membership/membership';
import { ConfbPage } from '../confb/confb';
import { CollectionDetailPage } from '../collection-detail/collection-detail';
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

  presentConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Buy item A   amount',
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
  con(){
    this.navCtrl.push(ConfbPage);
  }

  Membership(){
    this.navCtrl.push(MembershipPage);
  }

  backpage(){
    this.navCtrl.push(CollectionDetailPage);
  }
}
