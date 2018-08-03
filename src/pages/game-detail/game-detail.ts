import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MembershipPage } from '../membership/membership';
import { HowToPlayPage } from '../how-to-play/how-to-play';
import { ConvertclickPage } from '../convertclick/convertclick';
import { PrePlaygamePage } from '../pre-playgame/pre-playgame';

@IonicPage()
@Component({
  selector: 'page-game-detail',
  templateUrl: 'game-detail.html',
})
export class GameDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameDetailPage');
  }

  Membership(){
    this.navCtrl.push(MembershipPage);
  }

  goToHowToPlay(){
    this.navCtrl.push(HowToPlayPage);
  }

  goToConvertClick(){
    this.navCtrl.push(ConvertclickPage);
  }

  goToPrePlay(){
    this.navCtrl.push(PrePlaygamePage);
  }

  gotoPrePlaygamePage(){
    this.navCtrl.push(MembershipPage,{"page":2});
  }
}
