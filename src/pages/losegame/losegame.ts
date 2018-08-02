import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BlankPage } from '../blank/blank';
import { HomePage } from '../home/home';
import { PrePlaygamePage } from '../pre-playgame/pre-playgame';

/**
 * Generated class for the LosegamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-losegame',
  templateUrl: 'losegame.html',
})
export class LosegamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LosegamePage');
  }
  blankpage(){
    this.navCtrl.push(BlankPage);
  }
  gotoHome(){
    this.navCtrl.setRoot(HomePage);
  }
  gotoPrePlaygamePage(){
    this.navCtrl.push(PrePlaygamePage);
  }
}
