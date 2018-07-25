import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MembershipPage } from '../pages/membership/membership';
import { TradePage } from '../pages/trade/trade';
import { CollectionPage } from '../pages/collection/collection';
import { TicketPage } from '../pages/ticket/ticket';
import { Web1Page } from '../pages/web1/web1';
import { Web2Page } from '../pages/web2/web2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MembershipPage,
    TradePage,
    CollectionPage,
    TicketPage,
    Web1Page,
    Web2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MembershipPage,
    TradePage,
    CollectionPage,
    TicketPage,
    Web1Page,
    Web2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
