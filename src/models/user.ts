import { ScratchLotto } from '../models/scratchLotto';
import { SlotMachine } from '../models/slotMachine';

export class User{
        coins:number; 
        ethereum:number;
        money:number;
        scratchGame :ScratchLotto;
        slotGame:SlotMachine;
        buyHistory:any[]
        sellHistory:any[]
        collection:any[]

        constructor() {
            this.coins = 0;
            this.ethereum = 0;
            this.money = 50000;
            this.scratchGame = new ScratchLotto();
            this.slotGame = new SlotMachine();
            this.buyHistory = [];
            this.sellHistory = [];
            this.collection = [
                {'name':'poe','amount':0,'src':'../../assets/imgs/poe.png'},
                {'name':'club','amount':0,'src':'../../assets/imgs/card05.png'},
                {'name':'phodrum','amount':0,'src':'../../assets/imgs/phodrum.png'},
                {'name':'blackheart','amount':0,'src':'../../assets/imgs/blackheart.png'},
                {'name':'club2','amount':0,'src':'../../assets/imgs/card05.png'},

        ]
        }
    }