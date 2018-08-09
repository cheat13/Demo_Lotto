import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MembershipPage } from '../membership/membership';
import { TicketPage } from '../ticket/ticket';
/**
 * Generated class for the ConvertclickBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-convertclick-b',
  templateUrl: 'convertclick-b.html',
})
export class ConvertclickBPage {
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
            console.log('Confirm clicked');
            this.buyTicket();
          }
        }
      ]
    });
    alert.present();
  }
  buyTicket() {
    this.user.slotGame.tickets = Number(this.user.slotGame.tickets) + Number(this.num);
    this.user.coins -= Number(this.num);
    this.addTicket();
    this.navCtrl.push(TicketPage, { 'user': this.user });
  }

  addTicket(){
    let round = Number(this.user.slotGame.ticket.length) + Number(this.num);
    for(let i=this.user.slotGame.ticket.length;i<round;i++){
      this.user.slotGame.ticket.push({'no':i+1,'status':'neverPlayed','isWin':null})
    }
    
}
  calculate() {
    this.sum = this.num * 50;
  }

  Membership() {
    this.navCtrl.push(MembershipPage,{'user':this.user});
  }
}
