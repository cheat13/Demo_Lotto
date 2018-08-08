import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MycollectPage } from '../mycollect/mycollect';
import { MembershipPage } from '../membership/membership';
import { CollectionTradePage } from '../collection-trade/collection-trade'
/**
 * Generated class for the DetailcollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailcollection',
  templateUrl: 'detailcollection.html',
})
export class DetailcollectionPage {
  user:any
  index:number
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
    this.index = this.navParams.get('index');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailcollectionPage');
  }
  
  tr(){
    this.navCtrl.push(CollectionTradePage,{'user':this.user,'index':this.index,'from':true});
  }
  backpage(){
    this.navCtrl.push(MycollectPage,{'user':this.user});
  }

  Membership(){
    this.navCtrl.push(MembershipPage);
 }
}
