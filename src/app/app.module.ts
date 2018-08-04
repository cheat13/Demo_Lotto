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
import { GameDetailPage } from '../pages/game-detail/game-detail';
import { SuccessPage } from '../pages/success/success';
import { SellPage } from '../pages/sell/sell';
import { ConvertPage } from '../pages/convert/convert';
import { ConvertclickPage } from '../pages/convertclick/convertclick';
import { LottogamePage } from '../pages/lottogame/lottogame';
import { WingamePage } from '../pages/wingame/wingame';
import { GameresultPage } from '../pages/gameresult/gameresult';
import { BlankPage } from '../pages/blank/blank';
import { LosegamePage } from '../pages/losegame/losegame';
import { Web3Page } from '../pages/web3/web3';
import { MycollectPage } from '../pages/mycollect/mycollect';
import { HowToPlayPage } from '../pages/how-to-play/how-to-play';
import { MarketplacePage } from '../pages/marketplace/marketplace';
import { CollectionDetailPage } from '../pages/collection-detail/collection-detail';
import { BuyCollectionPage } from '../pages/buy-collection/buy-collection';
import { ConfPage } from '../pages/conf/conf';
import { DetailcollectionPage } from '../pages/detailcollection/detailcollection';
import { TradedetailPage } from '../pages/tradedetail/tradedetail';
import { TradesellPage } from '../pages/tradesell/tradesell';
import { ConfsPage } from '../pages/confs/confs';
import {TradehistoryPage} from '../pages/tradehistory/tradehistory';
import { ConfbPage } from '../pages/confb/confb';
import { GameDetailBPage } from '../pages/game-detail-b/game-detail-b';
import { ConvertclickBPage } from '../pages/convertclick-b/convertclick-b';
import { GameDetailCPage } from '../pages/game-detail-c/game-detail-c';
import { ConvertclickCPage} from '../pages/convertclick-c/convertclick-c';
import { GameDetailDPage } from '../pages/game-detail-d/game-detail-d';
import { ConvertclickDPage} from '../pages/convertclick-d/convertclick-d';
import { PrePlaySlotPage } from '../pages/pre-play-slot/pre-play-slot'; 
import { SlotgamePage } from '../pages/slotgame/slotgame';
import { StartPage } from '../pages/start/start'
import { IonicStorageModule } from '@ionic/storage';
import { GameresultslotPage } from '../pages/gameresultslot/gameresultslot';
import { ConfmslotmodalPage } from '../pages/confmslotmodal/confmslotmodal';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';
import{MoneyPage} from'../pages/money/money';
import { Home2Page } from '../pages/home2/home2';


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
    SuccessPage,
    SellPage, 
    ConvertPage,
    ConvertclickPage,
    LottogamePage,
    WingamePage,
    GameresultPage,
    BlankPage,
    LosegamePage,
    Web3Page,
    MycollectPage,
    HowToPlayPage,
    MarketplacePage,
    CollectionDetailPage, 
    BuyCollectionPage,
    MycollectPage,
    ConfPage,
    DetailcollectionPage,
    TradedetailPage,
    TradesellPage,
    ConfsPage,
    BuyCollectionPage,
    TradehistoryPage,
    ConfbPage,
    GameDetailBPage,
    ConvertclickBPage,
    GameDetailCPage,
    ConvertclickCPage,
    GameDetailDPage,
    ConvertclickDPage,
    PrePlaySlotPage,
    SlotgamePage,
    StartPage,
    GameresultslotPage,
    ConfmslotmodalPage,
    LosegamePage,
    MoneyPage,
    Home2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
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
    SuccessPage,
    SellPage,
    ConvertPage,
    ConvertclickPage,
    LottogamePage,
    WingamePage,
    GameresultPage,
    BlankPage,
    LosegamePage,
    Web3Page,
    MycollectPage,
    HowToPlayPage,
    MarketplacePage,
    CollectionDetailPage,
    BuyCollectionPage,
    MycollectPage,
    ConfPage,
    DetailcollectionPage,
    TradedetailPage,
    TradesellPage,
    ConfsPage,
    BuyCollectionPage,
    TradehistoryPage,
    ConfbPage,
    GameDetailBPage,
    ConvertclickBPage,
    GameDetailCPage,
    ConvertclickCPage,
    GameDetailDPage,
    ConvertclickDPage,
    PrePlaySlotPage,
    SlotgamePage,
    StartPage,
    GameresultslotPage,
    ConfmslotmodalPage,
    LosegamePage,
    MoneyPage,
    Home2Page

  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
