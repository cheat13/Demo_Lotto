import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LottogamePage } from '../lottogame/lottogame';
import { MembershipPage } from '../membership/membership';
import { GameresultPage } from '../gameresult/gameresult';
import { TicketPage } from '../ticket/ticket';
import { GameDetailPage } from '../game-detail/game-detail';
import { GameDetailBPage } from '../game-detail-b/game-detail-b';
import { SlotgamePage } from '../slotgame/slotgame';

@IonicPage()
@Component({
  selector: 'page-pre-play-slot',
  templateUrl: 'pre-play-slot.html',
})
export class PrePlaySlotPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrePlaySlotPage');
  }
  goPlay(){
    this.navCtrl.push(SlotgamePage);
  }

  Membership(){
    this.navCtrl.push(MembershipPage);
  }

  goResult(){
    this.navCtrl.push(GameresultPage);
  }
  backpage(){
    this.navCtrl.push(TicketPage);
  }
  howtoplay(){
    this.navCtrl.push(GameDetailBPage);
  }

}
