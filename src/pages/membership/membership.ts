import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TradePage } from '../trade/trade';
import { CollectionPage } from '../collection/collection';
import { TicketPage } from '../ticket/ticket';
import { GameDetailPage } from '../game-detail/game-detail';
import { GameDetailBPage } from '../game-detail-b/game-detail-b';
import { GameDetailCPage } from '../game-detail-c/game-detail-c';
import { GameDetailDPage } from '../game-detail-d/game-detail-d';
import { HomePage } from '../home/home';

import { User } from '../../models/user';
 
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
  user:User
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
    
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
    this.navCtrl.push(TicketPage,{'user':this.user});
  }

  goToGameDetailPage(){
    this.navCtrl.push(GameDetailPage);
  }
  goB(){
    this.navCtrl.push(GameDetailBPage);
  }
  goC(){
    this.navCtrl.push(GameDetailCPage);
  }
  goD(){
    this.navCtrl.push(GameDetailDPage);
  }
  backpage(){
    this.navCtrl.setRoot(HomePage);
  }
}
