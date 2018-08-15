import { Component } from '@angular/core';
import {   NavController, NavParams } from 'ionic-angular';
import { ConvertclickPage } from '../convertclick/convertclick';
import { ConvertclickBPage } from '../convertclick-b/convertclick-b';
import { ConvertclickCPage } from '../convertclick-c/convertclick-c';
import { ConvertclickDPage } from '../convertclick-d/convertclick-d';
import { TicketPage } from '../ticket/ticket';
import { MembershipPage } from '../membership/membership';

/**
 * Generated class for the ConvertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-convert',
  templateUrl: 'convert.html',
})
export class ConvertPage {
user:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConvertPage');
  }

  goToConvertClick(){
    this.navCtrl.push(ConvertclickPage,{'user':this.user});
  }
  goB(){
    this.navCtrl.push(ConvertclickBPage,{'user':this.user});
  }
  goC(){
    this.navCtrl.push(ConvertclickCPage);
  }
  goD(){
    this.navCtrl.push(ConvertclickDPage);
  }
  backpage(){
    this.navCtrl.push(TicketPage,{'user':this.user});
  }
  gotoHomepage(){
    this.navCtrl.setRoot(MembershipPage,{'user':this.user});
  }
}
