import { Component } from '@angular/core';
import {   NavController, NavParams, AlertController, ActionSheetController, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the MoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-money',
  templateUrl: 'money.html',
})
export class MoneyPage {
  user:any
  num:number
  constructor(private modal: ModalController,public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController, public actionSheetCtrl: ActionSheetController) {
  this.user = this.navParams.get('user');
  console.log(this.user);
  }

  gohome() {
    this.navCtrl.push(HomePage,{'user':this.user});
  }
  confirm() {
    const myModal = this.modal.create('ConfirmmodalPage',{'user':this.user,'num':this.num,'eth':this.num*0.005});
    myModal.present();
  }

}
