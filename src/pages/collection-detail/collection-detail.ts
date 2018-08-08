import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyCollectionPage } from '../buy-collection/buy-collection';
import { MembershipPage } from '../membership/membership';
import { CollectionPage } from '../collection/collection';
<<<<<<< HEAD
import { TradePage } from '../trade/trade';
import { User } from '../../models/user';
=======
import { CollectionTradePage } from '../collection-trade/collection-trade';
>>>>>>> UPDATE app

@IonicPage()
@Component({
  selector: 'page-collection-detail',
  templateUrl: 'collection-detail.html',
})
export class CollectionDetailPage {
<<<<<<< HEAD
  user:User
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
=======
  user: any
  index: number
  amountCheck: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
    this.index = this.navParams.get('index');
    this.checkCanTrade();
>>>>>>> UPDATE app
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectionDetailPage');
  }

<<<<<<< HEAD
  BuyItem(){
    this.navCtrl.push(TradePage,{'user':this.user,'page':2});
=======
  BuyItem() {
    this.navCtrl.push(BuyCollectionPage);
>>>>>>> UPDATE app
  }

  Membership() {
    this.navCtrl.push(MembershipPage);
  }
  backpage() {
    this.navCtrl.push(CollectionPage, { 'user': this.user });
  }

  goToCollectionTrade(idx: number) {
    this.navCtrl.push(CollectionTradePage, { 'user': this.user, 'index': idx, 'collectNum': this.index });
  }

  checkCanTrade() {
    let col = this.user.collections[this.index].collection

    for (let i = 0; i < col.length; i++) {
      if (this.user.collection[col[i]].amount > 0) {
        this.amountCheck += 1;
      }
    }
    
    this.amountCheck == col.length ? this.user.collections[this.index].canTrade = true : this.user.collections[this.index].canTrade = false;
    console.log(this.user.collections[this.index].canTrade);
  }

}
