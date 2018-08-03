import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { User } from '../../models/user';
/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {
  amount:number = 0
  user:User
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = new User();
    console.log(this.user.money);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

  coinsCal(){
    this.user.coins = this.user.ethereum;
    this.amount = this.user.ethereum*2;
    
  }
  goToHome(){
    this.user.money = Number(this.user.money) - Number(this.amount);
    this.navCtrl.push(HomePage,{'user':this.user});
  }
}
