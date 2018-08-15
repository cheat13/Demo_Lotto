import { Component } from '@angular/core';
import {   NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the Web2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-web2',
  templateUrl: 'web2.html',
})
export class Web2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController) {
  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'mana',
      message: 'Accept agreement',
      buttons: [
        {
          text:'OK',
          role: 'OK',
          handler: () => {
            console.log('Destructive clicked');
            this.navCtrl.push(HomePage);
          }
        }
      ],
      
    });
    alert.present()
  }

}



