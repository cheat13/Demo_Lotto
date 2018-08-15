import { Component } from '@angular/core';
import {   NavController, NavParams } from 'ionic-angular';
import { MembershipPage } from '../membership/membership';
import { MarketplacePage } from '../marketplace/marketplace';
import { CollectionDetailPage } from '../collection-detail/collection-detail';
import { MycollectPage } from '../mycollect/mycollect';
import { CollectionDetailBPage } from '../collection-detail-b/collection-detail-b';
import { CollectionDetailCPage } from '../collection-detail-c/collection-detail-c';


@Component({
  selector: 'page-collection',
  templateUrl: 'collection.html',
})
export class CollectionPage {
  user:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectionPage');
  }

  Membership(){
    this.navCtrl.push(MembershipPage,{'user':this.user});
  }

  Marketplace(){
    this.navCtrl.push(MarketplacePage,{'user':this.user});
  }

  DetailCollectionA(index:number){
    this.navCtrl.push(CollectionDetailPage,{'user':this.user,'index':index});
  }
  DetailCollectionB(){
    this.navCtrl.push(CollectionDetailBPage);
  }
  DetailCollectionC(){
    this.navCtrl.push(CollectionDetailCPage);
  }
  mycollection(){
    this.navCtrl.push(MycollectPage,{'user':this.user});
  }
  backpage(){
    this.navCtrl.push(MembershipPage,{'user':this.user});
  }
}
