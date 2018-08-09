import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ConfPage} from '../conf/conf';
import { DetailcollectionPage } from '../detailcollection/detailcollection';
import { TradehistoryPage } from '../tradehistory/tradehistory';
import { CollectionPage } from '../collection/collection';
import { MembershipPage } from '../membership/membership';
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
  user:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MycollectPage');

  }

  detail(idxGame:number,idxCol:number){
    this.navCtrl.push(DetailcollectionPage,{'user':this.user,'indexGame':idxGame,'indexCol':idxCol});
  }
  his(){
    this.navCtrl.push(TradehistoryPage);
  }
  backpage(){
    this.navCtrl.push(CollectionPage,{'user':this.user});
  }

  Membership(){
    this.navCtrl.push(MembershipPage);
  }
}
