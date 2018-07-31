import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TradePage } from '../trade/trade';
import { CollectionPage } from '../collection/collection';
import { TicketPage } from '../ticket/ticket';
import { GameDetailPage } from '../game-detail/game-detail'

/**
 * Generated class for the MembershipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-membership',
  templateUrl: 'membership.html',
})
export class MembershipPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembershipPage');
  }

  Trade(){
    this.navCtrl.push(TradePage);
  }

  Collection(){
    this.navCtrl.push(CollectionPage);
  }

  Ticket(){
    this.navCtrl.push(TicketPage);
  }

  goToGameDetailPage(){
    this.navCtrl.push(GameDetailPage);
  }
}
