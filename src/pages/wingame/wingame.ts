import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BlankPage } from '../blank/blank';

/**
 * Generated class for the WingamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wingame',
  templateUrl: 'wingame.html',
})
export class WingamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WingamePage');
  }
  blankpage(){
    this.navCtrl.push(BlankPage);
  }
}
