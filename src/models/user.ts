import { ScratchLotto } from '../models/scratchLotto';
import { SlotMachine } from '../models/slotMachine';

export class User{
        coins:number; 
        ethereum:number;
        money:number;
        scratchGame :ScratchLotto;
        slotGame:SlotMachine;
        buyHistory:any[]

        constructor() {
            this.coins = 0;
            this.ethereum = 0;
            this.money = 50000;
            this.scratchGame = new ScratchLotto();
            this.slotGame = new SlotMachine();
            this.buyHistory = [] ;
        }
    }