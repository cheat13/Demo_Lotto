import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { PrePlaySlotPage } from '../pre-play-slot/pre-play-slot';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-gameresultslot',
  templateUrl: 'gameresultslot.html',
})
export class GameresultslotPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameresultslotPage');
  }
  Done() {
    this.navCtrl.push(PrePlaySlotPage);
  }
  gotoHome() {
    this.navCtrl.setRoot(HomePage);
  }
  gotoPrePlaySlotPage() {
    this.navCtrl.push(PrePlaySlotPage);
  }
  openModal() {
    const myModal = this.modal.create('ConfmslotmodalPage');
    myModal.present();
  }
}
