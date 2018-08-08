import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PrePlaySlotPage } from '../pre-play-slot/pre-play-slot';
import { HomePage } from '../home/home';
import { GameresultslotPage } from '../gameresultslot/gameresultslot';

@IonicPage()
@Component({
  selector: 'page-slotgame',
  templateUrl: 'slotgame.html',
})
export class SlotgamePage {
  img = '../../assets/imgs/Slot_Animation_Before.png';
  hideME=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlotgamePage');
  }
  Gameresultslot() {
    this.navCtrl.push(GameresultslotPage);
  }
  gotoHome() {
    this.navCtrl.setRoot(HomePage);
  }
  Done() {
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
  addEvent(){
    if(this.img=='../../assets/imgs/Slot_Animation_Before.png')
    {
      this.img = '../../assets/imgs/Slot_Animation_Spin.gif'
    }
  }
  stopEvent(){
    if(this.img=='../../assets/imgs/Slot_Animation_Spin.gif')
    {
      this.img = '../../assets/imgs/Slot_Animation_Result.png'
    }
    this.hideME = true;
    console.log('hello');
  }
}
