import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Web1Page } from '../pages/web1/web1';
import { TradePage } from '../pages/trade/trade';
import { MembershipPage } from '../pages/membership/membership';
import { GameresultPage } from '../pages/gameresult/gameresult';
import { ConvertclickPage } from '../pages/convertclick/convertclick';
import { WingamePage } from '../pages/wingame/wingame';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Web1Page;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

