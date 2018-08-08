export class ScratchLotto {
    name: string;
    prize: number
    tickets: number
    ticket?:string[]
    ticketsPrice: number

    constructor() {
        this.name = 'ScratchLotto';
        this.prize = 100;
        this.tickets = 0;
        this.ticketsPrice = 1;
        this.ticket = [];

    }
}