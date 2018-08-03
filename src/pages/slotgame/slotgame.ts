import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { PrePlaySlotPage } from '../pre-play-slot/pre-play-slot';
/**
 * Generated class for the SlotgamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slotgame',
  templateUrl: 'slotgame.html',
})
export class SlotgamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlotgamePage');
  } 
  Done(){
    this.navCtrl.push(PrePlaySlotPage);
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
