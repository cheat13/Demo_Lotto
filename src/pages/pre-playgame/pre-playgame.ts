import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LottogamePage } from '../lottogame/lottogame';
import { MembershipPage } from '../membership/membership';
import { GameresultPage } from '../gameresult/gameresult';
import { TicketPage } from '../ticket/ticket';
import { GameDetailPage } from '../game-detail/game-detail';

@IonicPage()
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

  goPlay(){
    this.navCtrl.push(LottogamePage);
  }

  Membership(){
    this.navCtrl.push(MembershipPage);
  }

  goResult(){
    this.navCtrl.push(GameresultPage);
  }
  backpage(){
    this.navCtrl.push(this.page==1 ? TicketPage : GameDetailPage);
  }
  howtoplay(){
    this.navCtrl.push(GameDetailPage);
  }
}
