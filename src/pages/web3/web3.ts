import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Web3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-web3',
  templateUrl: 'web3.html',
})
export class Web3Page {

  constructor(public alerCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Web3Page');
  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'scan mana!',
      message: 'Accept agreement, go to app lotto',
      buttons: ['Go']
    });
    alert.present()
  }
}
