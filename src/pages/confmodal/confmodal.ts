import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PrePlaygamePage } from '../pre-playgame/pre-playgame';

@IonicPage()
@Component({
  selector: 'page-confmodal',
  templateUrl: 'confmodal.html',
})
export class ConfmodalPage {
  gender: string = "thb";
  user: any;
  index: number
  amount: number
  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
    this.user = this.navParams.get('user');
    this.index = this.navParams.get('index');
    this.calAmount();
    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfmodalPage');
  }
  go() {
    if (this.gender == 'thb') {
      this.user.money += this.amount;
    } else if (this.gender == 'usd') {
      this.user.moneyUSD += this.amount
    }
    
    this.user.scratchGame.ticket[this.index].status = 'played';
    this.user.scratchGame.ticket[this.index].isWin = true;
    this.navCtrl.push(PrePlaygamePage, { 'user': this.user });
  }
  closeModal() {
    this.view.dismiss();
  }

  calAmount() {
    if (this.gender == 'thb') {
      this.amount = this.user.scratchGame.prize * 2;
    } else {
      this.amount = this.user.scratchGame.prize * 10;
    }
  }

}
