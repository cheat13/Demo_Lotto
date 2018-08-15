import { Component } from '@angular/core';
import {   NavController, NavParams, ViewController } from 'ionic-angular';
import { CollectionDetailPage } from '../collection-detail/collection-detail';

/**
 * Generated class for the ReceiveCollectionRewardModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-receive-collection-reward-modal',
  templateUrl: 'receive-collection-reward-modal.html',
})
export class ReceiveCollectionRewardModalPage {
  user: any
  index: number
  amount: number
  gender: string = "ETH"
  thbCurrency: number = 12000
  usdCurrency: number = 360
  ethCurrency: number = 1
  btcCurrency: number = 0.05
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
    this.user = this.navParams.get('user');
    this.index = this.navParams.get('index');
    this.calAmount();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceiveCollectionRewardModalPage');
  }

  calAmount() {

    if (this.gender == 'THB') {
      this.amount = this.user.collections[this.index].prize * this.thbCurrency;
    } else if (this.gender == 'USD') {
      this.amount = this.user.collections[this.index].prize * this.usdCurrency;
    } else if (this.gender == 'ETH') {
      this.amount = this.user.collections[this.index].prize * this.ethCurrency;
    }
  }

  go() {
    let col = this.user.collections[this.index].collection;
    for (let i = 0; i < col.length; i++) {
      this.user.collection[col[i].game].collection[col[i].col].amount -= 1;
    }

    if (this.gender == 'THB') {
      this.user.money += this.amount;
    } else if (this.gender == 'USD') {
      this.user.moneyUSD += this.amount;
    } else if (this.gender == 'ETH') {
      this.user.ethereum += this.amount;
    } else {
      this.user.moneyBTC += this.amount;
    }
    this.navCtrl.push(CollectionDetailPage, { 'user': this.user, 'index': this.index });
  }

  closeModal() {
    this.view.dismiss();
  }

}
