import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LottogamePage } from '../lottogame/lottogame';

/**
 * Generated class for the PrePlaygamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pre-playgame',
  templateUrl: 'pre-playgame.html',
})
export class PrePlaygamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrePlaygamePage');
  }

  goPlay(){
    this.navCtrl.push(LottogamePage);
  }

}
