import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TradesellPage} from '../tradesell/tradesell';
/**
 * Generated class for the ConfsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confs',
  templateUrl: 'confs.html',
})
export class ConfsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfsPage');
  }
  back(){
    this.navCtrl.push(TradesellPage);
  }
}
