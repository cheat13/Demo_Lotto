import { Component } from '@angular/core';
import {   NavController, NavParams } from 'ionic-angular';
import { MembershipPage } from '../membership/membership';
import { HowToPlayPage } from '../how-to-play/how-to-play';
import { ConvertclickDPage } from '../convertclick-d/convertclick-d';
import { PrePlaygamePage } from '../pre-playgame/pre-playgame';

/**
 * Generated class for the GameDetailDPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-game-detail-d',
  templateUrl: 'game-detail-d.html',
})
export class GameDetailDPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameDetailDPage');
  }
  Membership(){
    this.navCtrl.push(MembershipPage);
  }

  goToHowToPlay(){
    this.navCtrl.push(HowToPlayPage);
  }

  goToConvertClick(){
    this.navCtrl.push(ConvertclickDPage);
  }

  goToPrePlay(){
    this.navCtrl.push(PrePlaygamePage);
  }

}
