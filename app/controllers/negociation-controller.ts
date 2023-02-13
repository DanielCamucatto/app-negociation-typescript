export class NegociationController {
    private inputData;
    private inputAmount;
    private inputValue;


    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputAmount = document.querySelector('#Amount');
        this.inputValue = document.querySelector('#value');
    }

    add(){
        console.log(this.inputData, this.inputAmount, this.inputValue);
        
    }
}