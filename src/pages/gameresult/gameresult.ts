import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { WingamePage } from '../wingame/wingame';
import { LosegamePage } from '../losegame/losegame';
import { PrePlaygamePage } from '../pre-playgame/pre-playgame';
import { HomePage } from '../home/home';

/**
 * Generated class for the GameresultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gameresult',
  templateUrl: 'gameresult.html',
})
export class GameresultPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameresultPage');
  }
  winpage(){
    this.navCtrl.push(WingamePage);
  }
  losepage(){
    this.navCtrl.push(LosegamePage);
  }

  Done(){
    this.navCtrl.push(PrePlaygamePage);
  }
  gotoHome(){
    this.navCtrl.setRoot(HomePage);
  }
  gotoPrePlaygamePage(){
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
            this.Done()
            console.log('Confirm clicked');
          }
        }
      ]
    });
    alert.present();
}
}
