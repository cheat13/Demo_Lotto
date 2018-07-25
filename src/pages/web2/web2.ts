import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';

/**
 * Generated class for the Web2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-web2',
  templateUrl: 'web2.html',
})
export class Web2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController) {
  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'mana',
      message: 'Accept agreement',
      buttons: ['Ok']
    });
    alert.present()
  }

}