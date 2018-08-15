
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MembershipPage } from '../membership/membership';
import { Web1Page } from '../web1/web1';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MoneyPage } from '../money/money';

@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2Page {

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {

  }

  Membership() {
    this.navCtrl.push(MembershipPage);
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