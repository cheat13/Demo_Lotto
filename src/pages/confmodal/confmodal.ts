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


  constructor(public navCtrl: NavController, public navParams: NavParams, public view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfmodalPage');
  }
  go(){
    this.navCtrl.push(PrePlaygamePage);
  }
  closeModal(){
    this.view.dismiss();
  }
  
}
