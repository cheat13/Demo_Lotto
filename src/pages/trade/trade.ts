import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SellPage } from '../sell/sell';
import { MembershipPage } from '../membership/membership';
import { AlertController } from 'ionic-angular';
import { SuccessPage } from '../success/success';
import { CollectionDetailPage } from '../collection-detail/collection-detail';

@IonicPage()
@Component({
  selector: 'page-trade',
  templateUrl: 'trade.html',
})
export class TradePage {
  Trade: string = "buy";
  user: any
  page: number
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private modal: ModalController) {
    this.user = this.navParams.get('user');
    this.page = this.navParams.get('page');
  }
  stpSelect() {
    console.log('STP selected');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TradePage');
  }

  Sell() {
    this.navCtrl.push(SellPage);
  }

  Membership() {
    this.navCtrl.push(MembershipPage);
  }

  showConfirm() {
    const myModal = this.modal.create('TradeBuyModalPage');
    myModal.present();
  }

  showConfirmSell() {
    const myModal = this.modal.create('TradeSellModalPage');
    myModal.present();
  }
  backpage() {
    this.navCtrl.push(this.page == 1 ? MembershipPage : CollectionDetailPage);
  }
}
