import { Component } from '@angular/core';
import {   NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { TradePage } from '../trade/trade';
import { MembershipPage } from '../membership/membership';
import { CollectionPage } from '../collection/collection';

/**
 * Generated class for the CollectionDetailBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-collection-detail-b',
  templateUrl: 'collection-detail-b.html',
})
export class CollectionDetailBPage {
  user:User
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectionDetailPage');
  }

  BuyItem(){
    this.navCtrl.push(TradePage,{'user':this.user,'page':2});
  }

  Membership(){
    this.navCtrl.push(MembershipPage);
  }
  backpage(){
    this.navCtrl.push(CollectionPage);
  }
}
