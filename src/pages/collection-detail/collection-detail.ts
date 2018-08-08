import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyCollectionPage } from '../buy-collection/buy-collection';
import { MembershipPage } from '../membership/membership';
import { MycollectPage } from '../mycollect/mycollect';
import { CollectionPage } from '../collection/collection';
import { TradePage } from '../trade/trade';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-collection-detail',
  templateUrl: 'collection-detail.html',
})
export class CollectionDetailPage {
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
