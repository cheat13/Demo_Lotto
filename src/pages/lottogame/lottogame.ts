import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameresultPage } from '../gameresult/gameresult';

/**
 * Generated class for the LottogamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lottogame',
  templateUrl: 'lottogame.html',
})
export class LottogamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LottogamePage');
  }
  Gameresult(){
    this.navCtrl.push(GameresultPage);
  }
}
