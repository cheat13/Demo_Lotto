import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { MembershipPage } from '../membership/membership';
import { CollectionPage } from '../collection/collection';
import { HomePage } from '../home/home';

/**
 * Generated class for the MarketplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marketplace',
  templateUrl: 'marketplace.html',
})
export class MarketplacePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketplacePage');
  }

  Membership(){
    this.navCtrl.push(MembershipPage);  
  }
  backpage(){
    this.navCtrl.push(CollectionPage);
  }

  ConfirmBuy() {
    let alert = this.alertCtrl.create({
      title: 'Your want buy ???',
      subTitle: "Item A : 5,000 Baht",

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
 
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            let alert1 = this.alertCtrl.create({
              title: 'Success!!!'
            });alert1.present();
          }
        }
      ]

    });
    alert.present();
  }

  ConfirmBuy1() {
    let alert = this.alertCtrl.create({
      title: 'Your want buy ???',
      subTitle: "Item C : 1,000 Baht",

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            let alert1 = this.alertCtrl.create({
              title: 'Success!!!'
            });alert1.present();
          }
        }
      ]

    });
    alert.present();
  }

  ConfirmBuy2() {
    let alert = this.alertCtrl.create({
      title: 'Your want buy ???',
      subTitle: "Item D : 15,000 Baht",

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            let alert1 = this.alertCtrl.create({
              title: 'Success!!!'
            });alert1.present();
          }
        }
      ]

    });
    alert.present();
  }

  ConfirmBuy3() {
    let alert = this.alertCtrl.create({
      title: 'Your want buy ???',
      subTitle: "Item A : 20,000 Baht",

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          role: 'cancel',
          handler: () => {
            let alert1 = this.alertCtrl.create({
              title: 'Success!!!'
            });alert1.present();
          }
        }
      ]

    });
    alert.present();
  }

}
