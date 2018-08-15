import { Component } from '@angular/core';
import {   NavController, NavParams } from 'ionic-angular';
import { MembershipPage } from '../membership/membership';
import { HowToPlayPage } from '../how-to-play/how-to-play';
import { ConvertclickBPage } from '../convertclick-b/convertclick-b';
import { PrePlaySlotPage } from '../pre-play-slot/pre-play-slot';
/**
 * Generated class for the GameDetailBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-game-detail-b',
  templateUrl: 'game-detail-b.html',
})
export class GameDetailBPage {
  user:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameDetailBPage');
  }

  Membership(){
    this.navCtrl.push(MembershipPage,{'user':this.user});
  }

  goToHowToPlay(){
    this.navCtrl.push(HowToPlayPage,{'user':this.user});
  }

  goToConvertClick(){
    this.navCtrl.push(ConvertclickBPage,{'user':this.user});
  }

  goToPrePlay(){
    this.navCtrl.push(PrePlaySlotPage,{'user':this.user,});
  }
  backpage(){
    this.navCtrl.push(PrePlaySlotPage,{'user':this.user});
  }
}
