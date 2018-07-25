import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ConfPage} from '../conf/conf';
import { DetailcollectionPage } from '../detailcollection/detailcollection';
/**
 * Generated class for the MycollectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mycollect',
  templateUrl: 'mycollect.html',
})
export class MycollectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MycollectPage');

  }

  detail(){
    this.navCtrl.push(DetailcollectionPage);
  }
}
