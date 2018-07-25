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
import {  PrePlaygamePage } from '../pages/pre-playgame/pre-playgame';
import { GameDetailPage } from '../pages/game-detail/game-detail'
import { ConfirmPage } from '../pages/confirm/confirm';
import { SuccessPage } from '../pages/success/success';
import { SellPage } from '../pages/sell/sell';
import { ConfirmSellPage } from '../pages/confirm-sell/confirm-sell';
import { ConvertPage } from '../pages/convert/convert';
import { ConvertclickPage } from '../pages/convertclick/convertclick';
import { LottogamePage } from '../pages/lottogame/lottogame';
import { WingamePage } from '../pages/wingame/wingame';
import { GameresultPage } from '../pages/gameresult/gameresult';
import { BlankPage } from '../pages/blank/blank';
import { LosegamePage } from '../pages/losegame/losegame';
<<<<<<< HEAD
import { Web3Page } from '../pages/web3/web3';
=======
import { MycollectPage } from '../pages/mycollect/mycollect';
import { HowToPlayPage } from '../pages/how-to-play/how-to-play';
import { MarketplacePage } from '../pages/marketplace/marketplace';
import { CollectionDetailPage } from '../pages/collection-detail/collection-detail';
import { BuyCollectionPage } from '../pages/buy-collection/buy-collection';
>>>>>>> 62ab9f0e61a3575be3f83e51aa118a5b9977ab3d

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MembershipPage,
    TradePage,
    CollectionPage,
    TicketPage,
    Web1Page,
    Web2Page,
    PrePlaygamePage,
    GameDetailPage,
    ConfirmPage,
    SuccessPage,
    SellPage,
    ConfirmSellPage,
    ConvertPage,
    ConvertclickPage,
    LottogamePage,
    WingamePage,
    GameresultPage,
    BlankPage,
    LosegamePage,
<<<<<<< HEAD
    Web3Page,
=======
    MycollectPage,
    HowToPlayPage,
    MarketplacePage,
    CollectionDetailPage,
    BuyCollectionPage
>>>>>>> 62ab9f0e61a3575be3f83e51aa118a5b9977ab3d
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
    Web2Page,
    PrePlaygamePage,
    GameDetailPage,
    ConfirmPage,
    SuccessPage,
    SellPage,
    ConvertPage,
    ConvertclickPage,
    ConfirmSellPage,
    LottogamePage,
    WingamePage,
    GameresultPage,
    BlankPage,
    LosegamePage,
<<<<<<< HEAD
    Web3Page,
=======
    ConfirmSellPage,
    MycollectPage,
    HowToPlayPage,
    ConfirmSellPage,
    MarketplacePage,
    CollectionDetailPage,
    BuyCollectionPage
>>>>>>> 62ab9f0e61a3575be3f83e51aa118a5b9977ab3d
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
