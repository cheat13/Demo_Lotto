import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Home2Page } from '../home2/home2';

/**
 * Generated class for the ConfirmmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmmodal',
  templateUrl: 'confirmmodal.html',
})
export class ConfirmmodalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmmodalPage');
  }
  
  go(){
    this.navCtrl.push(Home2Page);
  }
  closeModal(){
    this.view.dismiss();
  }

}
