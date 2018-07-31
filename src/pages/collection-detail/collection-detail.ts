import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyCollectionPage } from '../buy-collection/buy-collection';

/**
 * Generated class for the CollectionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collection-detail',
  templateUrl: 'collection-detail.html',
})
export class CollectionDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectionDetailPage');
  }

  BuyItem(){
    this.navCtrl.push(BuyCollectionPage);
  }

}
