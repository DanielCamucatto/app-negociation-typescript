import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";

export class NegociationController {
    private inputData: HTMLInputElement;
    private inputAmount: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negociations = new Negociations();


    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputAmount = document.querySelector('#amount');
        this.inputValue = document.querySelector('#value');
    }

    add(): void{
        const negociation = this.createNegociation();
        this.negociations.add(negociation);
        console.log(this.negociations.renderList());
        
        this.clerForm();
        
    }

    createNegociation(): Negociation{
        const expReg = /-/g; // Procura e substitui todos os ( - )
        const date = new Date(this.inputData.value.replace(expReg, ',')); // subistitui a ( , ) por ( - )
        const amount = parseInt(this.inputAmount.value);
        const value = parseFloat(this.inputValue.value);
        return new Negociation(date, amount, value,);
    }

    clerForm(): void {
        this.inputData.value =''
        this.inputAmount.value = '';
        this.inputValue.value = ''; 
        this.inputData.focus();
    }
}