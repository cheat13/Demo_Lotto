import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {PrePlaygamePage} from '../pre-playgame/pre-playgame';

@IonicPage()
@Component({
  selector: 'page-confmodal',
  templateUrl: 'confmodal.html',
})
export class ConfmodalPage {
  gender:string = "thb";
  user:any;
  index:number
  constructor(public navCtrl: NavController, public navParams: NavParams, public view:ViewController) {
    this.user = this.navParams.get('user');
    this.index = this.navParams.get('index');
    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfmodalPage');
  }
  go(){
    this.user.money+=this.user.scratchGame.prize;
    this.user.scratchGame.ticket[this.index].status ='played';
    this.user.scratchGame.ticket[this.index].isWin =true;
    this.navCtrl.push(PrePlaygamePage,{'user':this.user});
  }
  closeModal(){
    this.view.dismiss();
  }
  
}
