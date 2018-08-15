import { Component } from '@angular/core';
import {   NavController, NavParams } from 'ionic-angular';
import { GameDetailPage } from '../game-detail/game-detail';

/**
 * Generated class for the HowToPlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-how-to-play',
  templateUrl: 'how-to-play.html',
})
export class HowToPlayPage {
  user:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HowToPlayPage');
  }
  
  backpage(){
    this.navCtrl.push(GameDetailPage,{'user':this.user});
  }
  

}
