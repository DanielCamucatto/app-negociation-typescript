import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";
export class NegociationController {
    constructor() {
        this.negociations = new Negociations();
        this.inputData = document.querySelector('#data');
        this.inputAmount = document.querySelector('#amount');
        this.inputValue = document.querySelector('#value');
    }
    add() {
        const negociation = this.createNegociation();
        this.negociations.add(negociation);
        console.log(this.negociations.renderList());
        this.clerForm();
    }
    createNegociation() {
        const expReg = /-/g; // Procura e substitui todos os ( - )
        const date = new Date(this.inputData.value.replace(expReg, ',')); // subistitui a ( , ) por ( - )
        const amount = parseInt(this.inputAmount.value);
        const value = parseFloat(this.inputValue.value);
        return new Negociation(date, amount, value);
    }
    clerForm() {
        this.inputData.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputData.focus();
    }
}
