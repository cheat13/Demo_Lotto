import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MembershipPage } from '../membership/membership';
import { MarketplacePage } from '../marketplace/marketplace';
import { CollectionDetailPage } from '../collection-detail/collection-detail';

/**
 * Generated class for the CollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collection',
  templateUrl: 'collection.html',
})
export class CollectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectionPage');
  }

  Membership(){
    this.navCtrl.push(MembershipPage);
  }

  Marketplace(){
    this.navCtrl.push(MarketplacePage);
  }

  DetailCollectionA(){
    this.navCtrl.push(CollectionDetailPage);
  }
}
