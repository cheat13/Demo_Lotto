import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SellPage } from '../sell/sell';
import { MembershipPage } from '../membership/membership';
import { AlertController } from 'ionic-angular';
import { SuccessPage } from '../success/success';

@IonicPage()
@Component({
  selector: 'page-trade',
  templateUrl: 'trade.html',
})
export class TradePage {
  Trade: string = "buy";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private modal: ModalController) {
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
    // const confirm = this.alertCtrl.create({
    //   title: 'Buy coin amount',
    //   subTitle: "<h5>100 coin</h5> 10,000 THB",
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       handler: () => {
    //         console.log('Disagree clicked');
    //       }
    //     },
    //     {
    //       text: 'Confirm',
    //       handler: () => {
    //         console.log('Agree clicked');
    //         this.navCtrl.push(SuccessPage);
    //       }
    //     }
    //   ]
    // });
    // confirm.present();
    
    const myModal = this.modal.create('TradeBuyModalPage');
    myModal.present();
  }

  showConfirmSell() {
    // const confirm = this.alertCtrl.create({
    //   title: 'Sell',
    //   subTitle: "Amount 100 coin <br> Prise/Unit 100 THB <br> Total 10,000 THB",
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       handler: () => {
    //         console.log('Disagree clicked');
    //       }
    //     },
    //     {
    //       text: 'Confirm',
    //       handler: () => {
    //         console.log('Agree clicked');
    //       }
    //     }
    //   ]
    // });
    // confirm.present();
    const myModal = this.modal.create('TradeSellModalPage');
    myModal.present();
  }
  backpage() {
    this.navCtrl.push(MembershipPage);
  }
}
