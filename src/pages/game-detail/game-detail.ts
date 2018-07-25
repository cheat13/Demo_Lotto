import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MembershipPage } from '../membership/membership';
import { HowToPlayPage } from '../how-to-play/how-to-play';
import { ConvertclickPage } from '../convertclick/convertclick';
/**
 * Generated class for the GameDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
}
