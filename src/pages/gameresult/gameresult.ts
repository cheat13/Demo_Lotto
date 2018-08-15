import { Component } from '@angular/core';
import {   NavController, NavParams, ModalController } from 'ionic-angular';
import { PrePlaygamePage } from '../pre-playgame/pre-playgame';
import { MembershipPage } from '../membership/membership';

 
@Component({
  selector: 'page-gameresult',
  templateUrl: 'gameresult.html',
})
export class GameresultPage {
    user:any
    index:number
  constructor(public navCtrl: NavController, public navParams: NavParams,private modal: ModalController ) {
    this.user = this.navParams.get('user');
    this.index = this.navParams.get('index');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameresultPage');
  }

  Done(){
    this.user.notice.push(
      {'title':'คุณได้รับเงินรางวัล '+ this.user.scratchGame.prize+' ETH',
      'detail':'กดเพื่อเข้าสู่หน้าแลกเปลี่ยนค่าเงิน',
      'index':this.index,
      'clickAble':true,
      'isExchanged':false,
      })
      this.user.scratchGame.ticket[this.index].status = 'played';
      this.user.scratchGame.ticket[this.index].isWin = true;
      this.user.collection[0].collection[49].amount+=1;
      this. user.scratchGame.tickets = Number(this.user.scratchGame.tickets) -1;
    this.navCtrl.push(PrePlaygamePage,{'user':this.user});
  }
  gotoHome() {
    this.navCtrl.setRoot(MembershipPage,{'user':this.user});
  }
  gotoPrePlaygamePage() {
    this.navCtrl.push(PrePlaygamePage,{'user':this.user});
  }
  openModal() {
    this.user.collection[0].collection[49].amount+=1;
    const myModal = this.modal.create('ConfmodalPage',{'user':this.user,'index':this.index});
    myModal.present();
  }
}
