import { Component } from '@angular/core';
import {   NavController, NavParams, ModalController } from 'ionic-angular';
import { PrePlaySlotPage } from '../pre-play-slot/pre-play-slot';
import { MembershipPage } from '../membership/membership';

 
@Component({
  selector: 'page-gameresultslot',
  templateUrl: 'gameresultslot.html',
})
export class GameresultslotPage {
  user:any
  index:number
  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController) {
    this.user = this.navParams.get('user');
    this.index = this.navParams.get('index');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameresultslotPage');
  }
  Done() {
    this.user.slotGame.ticket[this.index].status ='played';
    this.user.slotGame.ticket[this.index].isWin =false;
    this.user.collection[1].collection[7].amount+=1;
    this. user.slotGame.tickets = Number(this.user.slotGame.tickets) -1;
    this.navCtrl.push(PrePlaySlotPage,{'user':this.user});
    
  }
  gotoHome() {
    this.navCtrl.setRoot(MembershipPage,{'user':this.user});
  }
  gotoPrePlaySlotPage() {
    this.navCtrl.push(PrePlaySlotPage,{'user':this.user});
  }
  openModal() {
    const myModal = this.modal.create('ConfmslotmodalPage');
    myModal.present();
  }
}
