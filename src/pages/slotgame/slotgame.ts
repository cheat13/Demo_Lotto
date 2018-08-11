import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PrePlaySlotPage } from '../pre-play-slot/pre-play-slot';
import { GameresultslotPage } from '../gameresultslot/gameresultslot';
import { MembershipPage } from '../membership/membership';

@IonicPage()
@Component({
  selector: 'page-slotgame',
  templateUrl: 'slotgame.html',
})
export class SlotgamePage {
  img = '../../assets/imgs/Slot_Animation_Before.png';
  hideME=false;
  user:any
  index:number
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.user = this.navParams.get('user'); 
    this.index = this.navParams.get('index');
  }
  backpage(){
    this.navCtrl.push(PrePlaySlotPage,{'user':this.user});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlotgamePage');
  }
  Gameresultslot() {
    this.navCtrl.push(GameresultslotPage,{'user':this.user,'index':this.index});
  }
  gotoHome() {
    this.navCtrl.setRoot(MembershipPage,{'user':this.user});
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
      if (this.img == '../../assets/imgs/Slot_Animation_Before.png') {
        this.img = '../../assets/imgs/Slot_Animation_Spin.gif'
        setTimeout(() => {
          this.img = '../../assets/imgs/Slot_Animation_Result.png'
          this.hideME = true;
        }, 2000); 
    }
  }
}
