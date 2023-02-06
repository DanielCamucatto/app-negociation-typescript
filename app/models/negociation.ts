export class Negociation {
    #data; 
    #amount;
    #value;
    
    constructor(data, amount, value){
        this.#data = data;
        this.#amount = amount;
        this.#value = value;
    }

    get data(){
        return this.#data
    }

    get amount(){
        return this.#amount * this.#value
    }

    get value(){
        return this.#value
    }
}