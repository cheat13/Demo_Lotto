import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GameresultPage } from '../gameresult/gameresult';
import { HomePage } from '../home/home';
import { TicketPage } from '../ticket/ticket';
import { PrePlaygamePage } from '../pre-playgame/pre-playgame';

/**
 * Generated class for the LottogamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lottogame',
  templateUrl: 'lottogame.html',
})
export class LottogamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LottogamePage');
  }
  Gameresult(){
    this.navCtrl.push(GameresultPage);
  }
  gotoHome(){
    this.navCtrl.setRoot(HomePage);
  }
  backpage(){
    this.navCtrl.push(PrePlaygamePage);
  }
  al() {
    let alert = this.alertCtrl.create({
      title: 'Convert Success!',
      subTitle: "test",
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
}
