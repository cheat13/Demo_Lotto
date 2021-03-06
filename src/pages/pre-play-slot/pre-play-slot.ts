import { Component } from '@angular/core';
import {   NavController, NavParams } from 'ionic-angular';
import { MembershipPage } from '../membership/membership';
import { GameresultPage } from '../gameresult/gameresult';
import { TicketPage } from '../ticket/ticket';
import { GameDetailPage } from '../game-detail/game-detail';
import { GameDetailBPage } from '../game-detail-b/game-detail-b';
import { SlotgamePage } from '../slotgame/slotgame';
import { ConvertclickBPage } from '../convertclick-b/convertclick-b';

 
@Component({
  selector: 'page-pre-play-slot',
  templateUrl: 'pre-play-slot.html',
})
export class PrePlaySlotPage {
user:any
page:number
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user')
    this.page = this.navParams.get('page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrePlaySlotPage');
  }
  goPlay(index:number){
    this.navCtrl.push(SlotgamePage,{'user':this.user,'index':index});
  }

  Membership(){
    this.navCtrl.push(MembershipPage,{'user':this.user});
  }

  goResult(){
    this.navCtrl.push(GameresultPage);
  }
  backpage(){
    this.navCtrl.push(this.page==2 ? GameDetailPage : TicketPage,{'user':this.user});
  }
  howtoplay(){
    this.navCtrl.push(GameDetailBPage,{'user':this.user});
  }

  buyTicket(){
    this.navCtrl.push(ConvertclickBPage,{'user':this.user})
  }
}
