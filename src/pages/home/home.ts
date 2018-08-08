import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MembershipPage } from '../membership/membership';
import { Web1Page } from '../web1/web1';
import { Web2Page } from '../web2/web2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MoneyPage } from '../money/money';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:any
  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner,private navParams: NavParams) {
    this.user = this.navParams.get('user');
  }

  Membership() {
    this.navCtrl.push(MembershipPage,{'user':this.user});
  }

  gopage1(){
    this.navCtrl.push(Web1Page)
  }

  ScanQR(){
    this.barcodeScanner.scan().then(qrData => {
      if(qrData.text == 'money')
      {
        this.navCtrl.push(MoneyPage)
      }
      else if(qrData.text == 'game'){
        this.navCtrl.push(MembershipPage)
      }

     }).catch(err => {
         console.log('Error', err);
     });
  }
}