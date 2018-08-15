import { Component } from '@angular/core';
import {   NavController, NavParams } from 'ionic-angular';
import { Web2Page } from '../web2/web2';
import { Web3Page } from '../web3/web3';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the Web1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-web1',
  templateUrl: 'web1.html',
})
export class Web1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Web1Page');
  }

  goweb2(){
    this.navCtrl.push(Web2Page)
  }

  goweb3(){
    this.navCtrl.push(Web3Page)
  }
  home(){
    this.navCtrl.push(HomePage)
  }
}
