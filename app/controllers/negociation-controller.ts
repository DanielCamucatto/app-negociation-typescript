import { Negociation } from "../models/negociation.js";

export class NegociationController {
    private inputData: HTMLInputElement;
    private inputAmount: HTMLInputElement;
    private inputValue: HTMLInputElement;


    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputAmount = document.querySelector('#Amount');
        this.inputValue = document.querySelector('#value');
    }

    add(){
      const negociaton = new Negociation(
        this.inputData.value,
        this.inputAmount.value,
        this.inputValue.value
      );
        console.log(negociaton)
    }
}