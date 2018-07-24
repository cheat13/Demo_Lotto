import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MembershipPage } from '../membership/membership';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  Membership() {
    this.navCtrl.push(MembershipPage);
  }
}
