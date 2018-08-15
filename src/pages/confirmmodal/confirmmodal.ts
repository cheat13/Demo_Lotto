import { Component } from '@angular/core';
import {   NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the ConfirmmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-confirmmodal',
  templateUrl: 'confirmmodal.html',
})
export class ConfirmmodalPage {
  user:any
  num:number
  eth:number
  gender:string ='thb'
  amount:number
  constructor(public navCtrl: NavController, public navParams: NavParams, public view:ViewController) {
    this.user = this.navParams.get('user');
    this.num = this.navParams.get('num');
    this.eth = this.navParams.get('eth');
    this.calAmount();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmmodalPage');
  }
  
  go(){
    this.user.notice.push(
      {'title':'คุณได้ซื้อ Coin จำนวน '+this.num,
      'detail':'จ่ายจำนวน '+this.eth+" ETH ("+this.amount+" "+this.gender+")",
      'clickAble':false,
      })
    
      if (this.gender == 'thb') {
        this.user.money -= this.amount;
      } else if (this.gender == 'usd') {
        this.user.moneyUSD -= this.amount
      }else{
        this.user.moneyBTC -= this.amount;
      }
    this.user.coins= Number(this.user.coins)+Number(this.num);
    this.navCtrl.push(HomePage,{'user':this.user});
  }

  calAmount() {
    if (this.gender == 'thb') {
      this.amount = this.num*60;
    } else if(this.gender == 'usd'){
      this.amount = this.num*1.8;
    }else{
      this.amount = this.num*0.00025;
    }
  }

  closeModal(){
    this.view.dismiss();
  }

}
