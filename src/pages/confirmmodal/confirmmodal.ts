import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Home2Page } from '../home2/home2';
import { HomePage } from '../home/home';
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
  user:any
  constructor(public navCtrl: NavController, public navParams: NavParams, public view:ViewController) {
    this.user = this.navParams.get('user');
    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmmodalPage');
  }
  
  go(){
    this.navCtrl.push(HomePage,{'user':this.user});
  }
  closeModal(){
    this.view.dismiss();
  }

}
