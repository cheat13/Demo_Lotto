export class  SlotMachine{
    name: string;
    prize: number
    tickets: number
    ticket?:string[]
    ticketsPrice: number

    constructor() {
        this.name = 'SlotMachine';
        this.prize = 25000;
        this.tickets = 0;
        this.ticketsPrice = 1;
        this.ticket = [];

    }
    }