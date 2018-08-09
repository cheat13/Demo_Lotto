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
  user:any
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
    this.user = this.navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketplacePage');
  }

  Membership(){
    this.navCtrl.push(MembershipPage);  
  }
  backpage(){
    this.navCtrl.push(CollectionPage,{'user':this.user});
  }

  ConfirmBuy() {
    let alert = this.alertCtrl.create({
      title: 'Your want buy ???',
      subTitle: "Heart : 5,000 Baht",

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
           this.user.collection[0].collection[3].amount+=1;
           this.navCtrl.push(CollectionPage,{'user':this.user});
          }
        }
      ]

    });
    alert.present();
  }

  ConfirmBuy1() {
    let alert = this.alertCtrl.create({
      title: 'Your want buy ???',
      subTitle: "Club : 1,000 Baht",

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
            this.user.collection[0].collection[1].amount+=1;
            this.navCtrl.push(CollectionPage,{'user':this.user});
          }
        }
      ]

    });
    alert.present();
  }

  

}
