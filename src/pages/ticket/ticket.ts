import { Component } from '@angular/core';
import {   NavController, NavParams } from 'ionic-angular';
import { MembershipPage } from '../membership/membership';
import { PrePlaygamePage } from '../pre-playgame/pre-playgame';
import { ConvertPage } from '../convert/convert';
import { PrePlaySlotPage } from '../pre-play-slot/pre-play-slot';

/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage {
user:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
  }

  ionViewDidLoad() {
  }

  Membership(){
    this.navCtrl.push(MembershipPage,{'user':this.user});
  }

  goToConvert(){
    this.navCtrl.push(ConvertPage,{'user':this.user});
  }

  goToPrePlay(){
    this.navCtrl.push(PrePlaygamePage,{'user':this.user,'page':1});
  }

  goToPrePlaySlot(){
    this.navCtrl.push(PrePlaySlotPage,{'user':this.user,'page':1});
  }

  backpage(){
    this.navCtrl.push(MembershipPage,{'user':this.user});
  }
}
  