import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading } from 'ionic-angular';
import { GameresultPage } from '../gameresult/gameresult';
import { HomePage } from '../home/home';
import { TicketPage } from '../ticket/ticket';
import { PrePlaygamePage } from '../pre-playgame/pre-playgame';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/interval';


@IonicPage()
@Component({
  selector: 'page-lottogame',
  templateUrl: 'lottogame.html',
})
export class LottogamePage {


  img1 = '../../assets/imgs/frame.png';
  img2 = '../../assets/imgs/frame.png';
  img3 = '../../assets/imgs/frame.png';
  img4 = '../../assets/imgs/frame.png';
  img5 = '../../assets/imgs/frame.png';
  img6 = '../../assets/imgs/frame.png';
  img7 = '../../assets/imgs/frame.png';
  img8 = '../../assets/imgs/frame.png';
  img9 = '../../assets/imgs/frame.png';
  count: number = 0;
  show:any=false;
  user:any
  index:number

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.user = this.navParams.get('user');
    this.index = this.navParams.get('index');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LottogamePage');
  }
  Gameresult(){
    this.navCtrl.push(GameresultPage,{'user':this.user,'index':this.index});
  }
  gotoHome() {
    this.navCtrl.setRoot(HomePage);
  }
  backpage(){
    this.navCtrl.push(PrePlaygamePage,{'user':this.user});
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
  addEvent1() {
    if (this.img1 == '../../assets/imgs/frame.png') {
      this.img1 = '../../assets/imgs/Scratch_Animation.gif'
      setTimeout(() => {
        this.img1 = '../../assets/imgs/Asset 159.png'
      }, 1200);
    }
    this.count = this.count + 1;
    console.log(this.count);
    console.log('hello');
  }
  addEvent2() {
    if (this.img2 == '../../assets/imgs/frame.png') {
      this.img2 = '../../assets/imgs/s1.gif'
      setTimeout(() => {
        this.img2 = '../../assets/imgs/Asset 172.png'
      }, 1200);
    }
    this.count = this.count + 1;
    console.log(this.count);
    console.log('hello');
  }
  addEvent3() {
    if (this.img3 == '../../assets/imgs/frame.png') {
      this.img3 = '../../assets/imgs/s2.gif'
      setTimeout(() => {
        this.img3 = '../../assets/imgs/Asset 198.png'
      }, 1200);
    }
    this.count = this.count + 1;
    console.log(this.count);
    console.log('hello');
  }
  addEvent4() {
    if (this.img4 == '../../assets/imgs/frame.png') {
      this.img4 = '../../assets/imgs/s3.gif'
      setTimeout(() => {
        this.img4 = '../../assets/imgs/Asset 150.png'
      }, 1200);
    }
    this.count = this.count + 1;
    console.log(this.count);
    console.log('hello');
  }
  addEvent5() {
    if (this.img5 == '../../assets/imgs/frame.png') {
      this.img5 = '../../assets/imgs/s4.gif'
      setTimeout(() => {
        this.img5 = '../../assets/imgs/Asset 169.png'
      }, 1200);
    }
    this.count = this.count + 1;
    console.log(this.count);
    console.log('hello');
  }
  addEvent6() {
    if (this.img6 == '../../assets/imgs/frame.png') {
      this.img6 = '../../assets/imgs/s5.gif'
      setTimeout(() => {
        this.img6 = '../../assets/imgs/Asset 150.png'
      }, 1200);
    }
    this.count = this.count + 1;
    console.log(this.count);
    console.log('hello');
  }
  addEvent7() {
    if (this.img7 == '../../assets/imgs/frame.png') {
      this.img7 = '../../assets/imgs/s6.gif'
      setTimeout(() => {
        this.img7 = '../../assets/imgs/Asset 150.png'
      }, 1200);
    }
    this.count = this.count + 1;
    console.log(this.count);
    console.log('hello');
  }
  addEvent8() {
    if (this.img8 == '../../assets/imgs/frame.png') {
      this.img8 = '../../assets/imgs/s7.gif'
      setTimeout(() => {
        this.img8 = '../../assets/imgs/Asset 195.png'
      }, 1200);
    }
    this.count = this.count + 1;
    console.log(this.count);
    console.log('hello');
    this.show = true;
  }
  addEvent9() {
    if (this.img9 == '../../assets/imgs/frame.png') {
      this.img9 = '../../assets/imgs/s8.gif'
      setTimeout(() => {
        this.img9 = '../../assets/imgs/Asset 150.png'
      }, 1200);
    }
    this.count = this.count + 1;
    console.log(this.count);
    console.log('hello');
    if (this.count == 5) {
      this.show = true;
    }
  }
}
