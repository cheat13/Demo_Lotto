import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyCollectionPage } from '../buy-collection/buy-collection';
import { MembershipPage } from '../membership/membership';
import { MycollectPage } from '../mycollect/mycollect';
import { CollectionPage } from '../collection/collection';

@IonicPage()
@Component({
  selector: 'page-collection-detail',
  templateUrl: 'collection-detail.html',
})
export class CollectionDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectionDetailPage');
  }

  BuyItem(){
    this.navCtrl.push(BuyCollectionPage);
  }

  Membership(){
    this.navCtrl.push(MembershipPage);
  }
  backpage(){
    this.navCtrl.push(CollectionPage);
  }
}
