import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-confmodal',
  templateUrl: 'confmodal.html',
})
export class ConfmodalPage {
  gender: string = "eth";
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
      this.user.moneyUSD += this.amount;
    } else if(this.gender == 'eth'){
      this.user.ethereum += this.amount;
    }else {
      this.user.moneyBTC += this.amount;
    }
    this.user.notice[this.index].isExchanged= true;
    this.user.notice.splice(this.index+1, 1)
    this.navCtrl.push(HomePage, { 'user': this.user });
  }
  closeModal() {
    this.view.dismiss();
  }

  calAmount() {
    if (this.gender == 'thb') {
      this.amount = this.user.scratchGame.prize * 12000;
    } else if(this.gender == 'usd'){
      this.amount = this.user.scratchGame.prize * 360;
    } else if (this.gender == 'btc'){
      this.amount = this.user.scratchGame.prize * 0.05;
    } else{
      this. amount = this.user.scratchGame.prize;
    }
  }

}
