import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WingamePage } from '../wingame/wingame';
import { LosegamePage } from '../losegame/losegame';
import { PrePlaygamePage } from '../pre-playgame/pre-playgame';

/**
 * Generated class for the GameresultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gameresult',
  templateUrl: 'gameresult.html',
})
export class GameresultPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameresultPage');
  }
  winpage(){
    this.navCtrl.push(WingamePage);
  }
  losepage(){
    this.navCtrl.push(LosegamePage);
  }

  Done(){
    this.navCtrl.push(PrePlaygamePage);
  }
}
