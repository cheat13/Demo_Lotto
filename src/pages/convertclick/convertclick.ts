import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MembershipPage } from '../membership/membership';
import { ConvertPage } from '../convert/convert';
import { HomePage } from '../home/home';
import { TicketPage } from '../ticket/ticket';

/**
 * Generated class for the ConvertclickPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-convertclick',
  templateUrl: 'convertclick.html',
})
export class ConvertclickPage {
  user: any
  num: any;
  sum: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.user = this.navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConvertclickPage');
  }
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Convert Success!',
      subTitle: this.num + " coin => " + this.num + " Ticket",

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
            this.buyTicket();
            console.log('Confirm clicked');
          }
        }
      ]
    });
    alert.present();
  }

  buyTicket() {
    this.user.scratchGame.tickets = Number(this.user.scratchGame.tickets) + Number(this.num);
    this.user.coins -= Number(this.num);

    this.addTicket();
    this.navCtrl.push(TicketPage, { 'user': this.user });
  }

  addTicket(){
    let round = Number(this.user.scratchGame.ticket.length) + Number(this.num);
    for(let i=this.user.scratchGame.ticket.length;i<round;i++){
      this.user.scratchGame.ticket.push({'no':i+1,'status':'neverPlayed','isWin':null})
    }
    console.log(this.user.scratchGame.ticket);
}

  calculate() {
    this.sum = this.num * 50;
  }

  Membership() {
    this.navCtrl.push(MembershipPage);
  }

  backpage() {
    this.navCtrl.push(ConvertPage);
  }
  gotoHomepage() {
    this.navCtrl.setRoot(HomePage);
  }
}
