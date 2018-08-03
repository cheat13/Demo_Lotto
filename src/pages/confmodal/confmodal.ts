import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {PrePlaygamePage} from '../pre-playgame/pre-playgame';
/**
 * Generated class for the ConfmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confmodal',
  templateUrl: 'confmodal.html',
})
export class ConfmodalPage {

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
