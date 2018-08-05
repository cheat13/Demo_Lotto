import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { PrePlaygamePage } from '../pre-playgame/pre-playgame';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-gameresult',
  templateUrl: 'gameresult.html',
})
export class GameresultPage {
    user:any
    index:number
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,private modal: ModalController ) {
    this.user = this.navParams.get('user');
    this.index = this.navParams.get('index');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameresultPage');
  }

  Done(){
    
    this.navCtrl.push(PrePlaygamePage,{'user':this.user});
  }
  gotoHome() {
    this.navCtrl.setRoot(HomePage);
  }
  gotoPrePlaygamePage() {
    this.navCtrl.push(PrePlaygamePage);
  }
  openModal() {
    const myModal = this.modal.create('ConfmodalPage');
    myModal.present();
  }
}
