import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GameresultPage } from '../gameresult/gameresult';
import { HomePage } from '../home/home';
import { TicketPage } from '../ticket/ticket';
import { PrePlaygamePage } from '../pre-playgame/pre-playgame';

@IonicPage()
@Component({
  selector: 'page-lottogame',
  templateUrl: 'lottogame.html',
})
export class LottogamePage {
  img1 = '../../assets/imgs/cirpink.png';
  img2 = '../../assets/imgs/cirpink.png';
  img3 = '../../assets/imgs/cirpink.png';
  img4 = '../../assets/imgs/cirpink.png';
  img5 = '../../assets/imgs/cirpink.png';
  img6 = '../../assets/imgs/cirpink.png';
  img7 = '../../assets/imgs/cirpink.png';
  img8 = '../../assets/imgs/cirpink.png';
  img9 = '../../assets/imgs/cirpink.png';

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
  addEvent1(e){
    if(this.img1=='../../assets/imgs/cirpink.png')
    {
      this.img1 = '../../assets/imgs/phodrum.png'
    }
  }
  addEvent2(e){
    if(this.img2=='../../assets/imgs/cirpink.png')
    {
      this.img2 = '../../assets/imgs/phodrum.png'
    }
  }
  addEvent3(e){
    if(this.img3=='../../assets/imgs/cirpink.png')
    {
      this.img3 = '../../assets/imgs/phodrum.png'
    }
  }
  addEvent4(e){
    if(this.img4=='../../assets/imgs/cirpink.png')
    {
      this.img4 = '../../assets/imgs/phodrum.png'
    }
  }
  addEvent5(e){
    if(this.img5=='../../assets/imgs/cirpink.png')
    {
      this.img5 = '../../assets/imgs/phodrum.png'
    }
  }
  addEvent6(e){
    if(this.img6=='../../assets/imgs/cirpink.png')
    {
      this.img6 = '../../assets/imgs/phodrum.png'
    }
  }
  addEvent7(e){
    if(this.img7=='../../assets/imgs/cirpink.png')
    {
      this.img7 = '../../assets/imgs/phodrum.png'
    }
  }
  addEvent8(e){
    if(this.img8=='../../assets/imgs/cirpink.png')
    {
      this.img8 = '../../assets/imgs/phodrum.png'
    }
  }
  addEvent9(e){
    if(this.img9=='../../assets/imgs/cirpink.png')
    {
      this.img9 = '../../assets/imgs/phodrum.png'
    }
  }
}
