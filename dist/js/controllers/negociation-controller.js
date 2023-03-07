import { Negociation } from "../models/negociation.js";
export class NegociationController {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputAmount = document.querySelector('#amount');
        this.inputValue = document.querySelector('#value');
    }
    add() {
        const expReg = /-/g; // Procura e substitui todos os ( - )
        const date = new Date(this.inputData.value.replace(expReg, ',')); // subistitui a ( , ) por ( - )
        const amount = parseInt(this.inputAmount.value);
        const value = parseFloat(this.inputValue.value);
        const negociaton = new Negociation(date, amount, value);
        console.log(negociaton);
    }
}
