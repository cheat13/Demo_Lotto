import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BlankPage } from '../blank/blank';
import { HomePage } from '../home/home';
import { MembershipPage } from '../membership/membership';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the WingamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wingame',
  templateUrl: 'wingame.html',
})
export class WingamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WingamePage');
  }
  blankpage(){
    this.navCtrl.push(BlankPage);
  }

  Membership() {
    this.navCtrl.push(MembershipPage);
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'คุณชนะ Lotto',
      message: 'Earn Reward 350,000 THB!',
      buttons: [{
        text: 'OK',
        handler: () => {
          console.log('Disagree clicked');
          this.navCtrl.push(HomePage);
        }
      }]
    });
    alert.present();
  }
}
