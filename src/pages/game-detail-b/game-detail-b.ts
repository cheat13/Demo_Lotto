import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MembershipPage } from '../membership/membership';
import { HowToPlayPage } from '../how-to-play/how-to-play';
import { ConvertclickBPage } from '../convertclick-b/convertclick-b';
import { PrePlaygamePage } from '../pre-playgame/pre-playgame';
/**
 * Generated class for the GameDetailBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-detail-b',
  templateUrl: 'game-detail-b.html',
})
export class GameDetailBPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameDetailBPage');
  }

  Membership(){
    this.navCtrl.push(MembershipPage);
  }

  goToHowToPlay(){
    this.navCtrl.push(HowToPlayPage);
  }

  goToConvertClick(){
    this.navCtrl.push(ConvertclickBPage);
  }

  goToPrePlay(){
    this.navCtrl.push(PrePlaygamePage);
  }
}
