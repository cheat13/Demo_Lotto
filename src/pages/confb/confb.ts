import { Component } from '@angular/core';
import {   NavController, NavParams } from 'ionic-angular';
import {BuyCollectionPage} from '../buy-collection/buy-collection';
/**
 * Generated class for the ConfbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-confb',
  templateUrl: 'confb.html',
})
export class ConfbPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfbPage');
  }
  back(){
    this.navCtrl.push(BuyCollectionPage);
  }
}
