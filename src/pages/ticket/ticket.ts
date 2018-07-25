import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MembershipPage } from '../membership/membership';
import { PrePlaygamePage } from '../pre-playgame/pre-playgame';

/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
  }

  Membership(){
    this.navCtrl.push(MembershipPage);
  }

  goToConvertPage(){
    //NavPush
  }

  goToPrePlay(){
    this.navCtrl.push(PrePlaygamePage);
  }
}
