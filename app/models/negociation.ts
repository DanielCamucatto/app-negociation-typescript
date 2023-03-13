export class Negociation {

    constructor(
        public readonly data: Date, 
        public readonly amount: number, 
        public readonly value:number
    ){}

    get volume(): Number {
        return this.amount * this.value;
    }
}