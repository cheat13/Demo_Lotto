import { ScratchLotto } from '../models/scratchLotto';
import { SlotMachine } from '../models/slotMachine';

export class User {
    coins: number;
    ethereum: number;
    money: number;
    moneyUSD: number;
    scratchGame: ScratchLotto;
    slotGame: SlotMachine;
    buyHistory: any[]
    sellHistory: any[]
    collection: any[]
    collections: any[]
    notice:any[]

    constructor() {
        this.coins = 0;
        this.ethereum = 0;
        this.money = 50000;
        this.moneyUSD = 500;
        this.scratchGame = new ScratchLotto();
        this.slotGame = new SlotMachine();
        this.buyHistory = [];
        this.sellHistory = [];
        this.collection = [{'gameName':'Scratch Lotto','collection':[
            { 'name': 'poe', 'amount': 0, 'src': '../../assets/imgs/Asset 160.png' },
            { 'name': 'club', 'amount': 0, 'src': '../../assets/imgs/Asset 186.png' },
            { 'name': 'phodrum', 'amount': 0, 'src': '../../assets/imgs/Asset 173.png' },
            { 'name': 'blackheart', 'amount': 0, 'src': '../../assets/imgs/Asset 147.png' },
            { 'name': '5', 'amount': 0, 'src': '../../assets/imgs/Asset 161.png' },
            { 'name': '6', 'amount': 0, 'src': '../../assets/imgs/Asset 187.png' },
            { 'name': '7', 'amount': 0, 'src': '../../assets/imgs/Asset 174.png' },
            { 'name': '8', 'amount': 0, 'src': '../../assets/imgs/Asset 148.png' },
            { 'name': '9', 'amount': 0, 'src': '../../assets/imgs/Asset 162.png' },
            { 'name': '10', 'amount': 0, 'src': '../../assets/imgs/Asset 188.png' },
            { 'name': '11', 'amount': 0, 'src': '../../assets/imgs/Asset 175.png' },
            { 'name': '12', 'amount': 0, 'src': '../../assets/imgs/Asset 149.png' },
            { 'name': '13', 'amount': 0, 'src': '../../assets/imgs/Asset 163.png' },
            { 'name': '14', 'amount': 0, 'src': '../../assets/imgs/Asset 189.png' },
            { 'name': '15', 'amount': 0, 'src': '../../assets/imgs/Asset 176.png' },
            { 'name': '16', 'amount': 0, 'src': '../../assets/imgs/Asset 150.png' },
            { 'name': '17', 'amount': 0, 'src': '../../assets/imgs/Asset 164.png' },
            { 'name': '18', 'amount': 0, 'src': '../../assets/imgs/Asset 190.png' },
            { 'name': '19', 'amount': 0, 'src': '../../assets/imgs/Asset 177.png' },
            { 'name': '20', 'amount': 0, 'src': '../../assets/imgs/Asset 151.png' },
            { 'name': '21', 'amount': 0, 'src': '../../assets/imgs/Asset 165.png' },
            { 'name': '22', 'amount': 0, 'src': '../../assets/imgs/Asset 191.png' },
            { 'name': '23', 'amount': 0, 'src': '../../assets/imgs/Asset 178.png' },
            { 'name': '24', 'amount': 0, 'src': '../../assets/imgs/Asset 152.png' },
            { 'name': '25', 'amount': 0, 'src': '../../assets/imgs/Asset 166.png' },
            { 'name': '26', 'amount': 0, 'src': '../../assets/imgs/Asset 192.png' },
            { 'name': '27', 'amount': 0, 'src': '../../assets/imgs/Asset 179.png' },
            { 'name': '28', 'amount': 0, 'src': '../../assets/imgs/Asset 153.png' },
            { 'name': '29', 'amount': 0, 'src': '../../assets/imgs/Asset 167.png' },
            { 'name': '30', 'amount': 0, 'src': '../../assets/imgs/Asset 193.png' },
            { 'name': '31', 'amount': 0, 'src': '../../assets/imgs/Asset 180.png' },
            { 'name': '32', 'amount': 0, 'src': '../../assets/imgs/Asset 154.png' },
            { 'name': '33', 'amount': 0, 'src': '../../assets/imgs/Asset 168.png' },
            { 'name': '34', 'amount': 0, 'src': '../../assets/imgs/Asset 194.png' },
            { 'name': '35', 'amount': 0, 'src': '../../assets/imgs/Asset 181.png' },
            { 'name': '36', 'amount': 0, 'src': '../../assets/imgs/Asset 155.png' },
            { 'name': '37', 'amount': 0, 'src': '../../assets/imgs/Asset 169.png' },
            { 'name': '38', 'amount': 0, 'src': '../../assets/imgs/Asset 195.png' },
            { 'name': '39', 'amount': 0, 'src': '../../assets/imgs/Asset 182.png' },
            { 'name': '40', 'amount': 0, 'src': '../../assets/imgs/Asset 156.png' },
            { 'name': '41', 'amount': 0, 'src': '../../assets/imgs/Asset 170.png' },
            { 'name': '42', 'amount': 0, 'src': '../../assets/imgs/Asset 196.png' },
            { 'name': '43', 'amount': 0, 'src': '../../assets/imgs/Asset 183.png' },
            { 'name': '44', 'amount': 0, 'src': '../../assets/imgs/Asset 157.png' },
            { 'name': '45', 'amount': 0, 'src': '../../assets/imgs/Asset 171.png' },
            { 'name': '46', 'amount': 0, 'src': '../../assets/imgs/Asset 197.png' },
            { 'name': '47', 'amount': 0, 'src': '../../assets/imgs/Asset 184.png' },
            { 'name': '48', 'amount': 0, 'src': '../../assets/imgs/Asset 158.png' },
            { 'name': '49', 'amount': 0, 'src': '../../assets/imgs/Asset 172.png' },
            { 'name': '50', 'amount': 0, 'src': '../../assets/imgs/Asset 185.png' },
            { 'name': '51', 'amount': 0, 'src': '../../assets/imgs/Asset 198.png' },
            { 'name': '52', 'amount': 0, 'src': '../../assets/imgs/Asset 159.png' },

        ]},
        {'gameName':'Slot Machine','collection':[
            { 'name': '199', 'amount': 0, 'src': '../../assets/imgs/Asset 199.png' },
            { 'name': '200', 'amount': 0, 'src': '../../assets/imgs/Asset 200.png' },
            { 'name': '201', 'amount': 0, 'src': '../../assets/imgs/Asset 201.png' },
            { 'name': '202', 'amount': 0, 'src': '../../assets/imgs/Asset 202.png' },
            { 'name': '203', 'amount': 0, 'src': '../../assets/imgs/Asset 203.png' },
            { 'name': '204', 'amount': 0, 'src': '../../assets/imgs/Asset 204.png' },
            { 'name': '206', 'amount': 0, 'src': '../../assets/imgs/Asset 206.png' },
            { 'name': '207', 'amount': 0, 'src': '../../assets/imgs/Asset 207.png' },
            { 'name': '208', 'amount': 0, 'src': '../../assets/imgs/Asset 208.png' },
            { 'name': '209', 'amount': 0, 'src': '../../assets/imgs/Asset 209.png' },
            { 'name': '210', 'amount': 0, 'src': '../../assets/imgs/Asset 210.png' },
            { 'name': '211', 'amount': 0, 'src': '../../assets/imgs/Asset 211.png' },
            { 'name': '212', 'amount': 0, 'src': '../../assets/imgs/Asset 212.png' },
            { 'name': '213', 'amount': 0, 'src': '../../assets/imgs/Asset 213.png' },
            { 'name': '214', 'amount': 0, 'src': '../../assets/imgs/Asset 214.png' },
        ]},
           
        ];
        this.collections = [
            {'title':'A', 'description':'Collection A ','prize':100,'collection':[{'game':0,'col':0},{'game':0,'col':1},{'game':0,'col':2},{'game':1,'col':0}],canTrade:false}
        ];
        this.notice = [];
    }
}