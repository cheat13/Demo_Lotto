import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PrePlaySlotPage } from '../../pages/pre-play-slot/pre-play-slot';
@IonicPage()
@Component({
  selector: 'page-confmslotmodal',
  templateUrl: 'confmslotmodal.html',
})
export class ConfmslotmodalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfmslotmodalPage');
  }
  go(){
    this.navCtrl.push(PrePlaySlotPage);
  }
  closeModal(){
    this.view.dismiss();
  }
}
