import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController, ModalController } from 'ionic-angular';
import { Web1Page } from '../web1/web1';
import { HomePage } from '../home/home';

/**
 * Generated class for the MoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-money',
  templateUrl: 'money.html',
})
export class MoneyPage {

  constructor(private modal: ModalController,public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController, public actionSheetCtrl: ActionSheetController) {
  }

  gohome() {
    this.navCtrl.push(HomePage);
  }
  confirm() {
    const myModal = this.modal.create('ConfirmmodalPage');
    myModal.present();
  }

}
