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
  user:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user')
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
    this.navCtrl.push(ConvertclickPage,{'user':this.user});
  }

  goToPrePlay(){
    this.navCtrl.push(PrePlaygamePage,{'user':this.user,'page':2});
  }

  gotoPrePlaygamePage(){
    this.navCtrl.push(MembershipPage,{'user':this.user});
  }
}
