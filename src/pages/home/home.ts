import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import { MembershipPage } from '../membership/membership';
import { Web1Page } from '../web1/web1';
import { Web2Page } from '../web2/web2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MoneyPage } from '../money/money';
import { User } from '../../models/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:User
  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner,private navParams: NavParams,private modal: ModalController) {
    
    this.user = this.navParams.get('user');
    if(typeof this.user=== 'undefined'){
      this.user = new User();
    }
  }

  goMembership() {
    this.navCtrl.push(MembershipPage,{'user':this.user});
  }

  goBuyCoin(){
    this.navCtrl.push(MoneyPage,{'user':this.user})
  }

  goSubscribe(){
    this.user.notice.push(
      {'title':'คุณได้สมัครสมาชิก',
      'detail':'กดเพื่อเข้าสู่หน้า Membership',
      'clickAble':true,
      })
    this.navCtrl.push(HomePage,{'user':this.user})
  }

  openModal(idx:number) {
    const myModal = this.modal.create('ConfmodalPage',{'user':this.user,'index':idx});
    myModal.present();
  }

  ScanQR(){
    this.barcodeScanner.scan().then(qrData => {
      if(qrData.text == 'money')
      {
        this.goBuyCoin();
      }
      else if(qrData.text == 'game'){
        this.goSubscribe();
      }

     }).catch(err => {
         console.log('Error', err);
     });
  }
}