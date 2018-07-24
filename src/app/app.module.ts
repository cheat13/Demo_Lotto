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
import { ConfirmPage } from '../pages/confirm/confirm';
import { SuccessPage } from '../pages/success/success';
import { SellPage } from '../pages/sell/sell';
import { ConfirmSellPage } from '../pages/confirm-sell/confirm-sell';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MembershipPage,
    TradePage,
    CollectionPage,
    TicketPage,
    ConfirmPage,
    SuccessPage,
    SellPage,
    ConfirmSellPage
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
    ConfirmPage,
    SuccessPage,
    SellPage,
    ConfirmSellPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
