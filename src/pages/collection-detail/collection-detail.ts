import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyCollectionPage } from '../buy-collection/buy-collection';
import { MembershipPage } from '../membership/membership';
import { CollectionPage } from '../collection/collection';
import { TradePage } from '../trade/trade';
import { User } from '../../models/user';
import { CollectionTradePage } from '../collection-trade/collection-trade';

@IonicPage()
@Component({
  selector: 'page-collection-detail',
  templateUrl: 'collection-detail.html',
})
export class CollectionDetailPage {
  user: any
  index: number
  amountCheck: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
    this.index = this.navParams.get('index');
    this.checkCanTrade();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectionDetailPage');
  }

  BuyItem(){
    this.navCtrl.push(TradePage,{'user':this.user,'page':2});
  }

  Membership() {
    this.navCtrl.push(MembershipPage);
  }
  backpage() {
    this.navCtrl.push(CollectionPage, { 'user': this.user });
  }

  goToCollectionTrade(idxGame: number,idxCol:number) {
    this.navCtrl.push(CollectionTradePage, { 'user': this.user, 'indexGame': idxGame,'indexCol': idxCol, 'collectNum': this.index });
  }

  checkCanTrade() {
    let col = this.user.collections[this.index].collection

    for (let i = 0; i < col.length; i++) {
      if (this.user.collection[col[i].game].collection[col[i].col].amount > 0) {
        this.amountCheck += 1;
      }
    }
    
    this.amountCheck == col.length ? this.user.collections[this.index].canTrade = true : this.user.collections[this.index].canTrade = false;
    console.log(this.user.collections[this.index].canTrade);
  }

}
