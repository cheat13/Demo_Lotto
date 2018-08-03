import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MembershipPage } from '../membership/membership';
import { Web1Page } from '../web1/web1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private navParams: NavParams) {

  }

  Membership() {
    this.navCtrl.push(MembershipPage,{'user':this.navParams.get('user')});
  }

gopage1(){
  this.navCtrl.push(Web1Page)
}
}