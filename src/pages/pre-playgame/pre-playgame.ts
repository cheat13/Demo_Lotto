import { Component } from '@angular/core';
import {   NavController, NavParams } from 'ionic-angular';
import { LottogamePage } from '../lottogame/lottogame';
import { MembershipPage } from '../membership/membership';
import { GameresultPage } from '../gameresult/gameresult';
import { TicketPage } from '../ticket/ticket';
import { GameDetailPage } from '../game-detail/game-detail';
import { ConvertclickPage } from '../convertclick/convertclick';

 
@Component({
  selector: 'page-pre-playgame',
  templateUrl: 'pre-playgame.html',
})
export class PrePlaygamePage {
  user:any
  page:number
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
    this.page = this.navParams.get('page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrePlaygamePage');
  }

  goPlay(index:number){
    this.navCtrl.push(LottogamePage,{'user':this.user,'index':index});
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
    this.navCtrl.push(GameDetailPage,{'user':this.user});
  }
  buyTicket(){
    this.navCtrl.push(ConvertclickPage,{'user':this.user})
  }
}
