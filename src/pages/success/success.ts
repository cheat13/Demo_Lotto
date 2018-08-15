import { Component } from '@angular/core';
import {   NavController, NavParams } from 'ionic-angular';
import { TradePage } from '../trade/trade';


/**
 * Generated class for the SuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-success',
  templateUrl: 'success.html',
})
export class SuccessPage {
  user:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuccessPage');
  }

  Trade(){
    this.navCtrl.push(TradePage,{'user':this.user});
  }
}
