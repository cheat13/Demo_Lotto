import { Component } from '@angular/core';
import {   NavController, NavParams } from 'ionic-angular';
import { MembershipPage } from '../membership/membership';
import { HowToPlayPage } from '../how-to-play/how-to-play';
import { ConvertclickCPage } from '../convertclick-c/convertclick-c';
import { PrePlaygamePage } from '../pre-playgame/pre-playgame';
/**
 * Generated class for the GameDetailCPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-game-detail-c',
  templateUrl: 'game-detail-c.html',
})
export class GameDetailCPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameDetailCPage');
  }
  Membership(){
    this.navCtrl.push(MembershipPage);
  }

  goToHowToPlay(){
    this.navCtrl.push(HowToPlayPage);
  }

  goToConvertClick(){
    this.navCtrl.push(ConvertclickCPage);
  }

  goToPrePlay(){
    this.navCtrl.push(PrePlaygamePage);
  }
}
