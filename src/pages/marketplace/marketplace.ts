import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MembershipPage } from '../membership/membership';
import { CollectionPage } from '../collection/collection';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
}
