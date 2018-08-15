import { Component } from '@angular/core';
import {   NavController, NavParams, AlertController } from 'ionic-angular';
import { MembershipPage } from '../membership/membership';
/**
 * Generated class for the ConvertclickDPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-convertclick-d',
  templateUrl: 'convertclick-d.html',
})
export class ConvertclickDPage {

  num:any;
  sum:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConvertclickPage');
  }
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Convert Success!',
      subTitle: this.num + " coin => "+ this.num + " Ticket",

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            console.log('Confirm clicked');
          }
        }
      ]
    });
    alert.present();
  }

calculate(){
  this.sum = this.num*50;
}

Membership(){
    this.navCtrl.push(MembershipPage);
  }
}