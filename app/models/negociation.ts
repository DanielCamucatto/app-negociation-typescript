export class Negociation {
    private _data: Date; 
    private _amount: number;
    private _value: number;
    
    constructor(data: Date, amount: number, value:number){
        this._data = data;
        this._amount = amount;
        this._value = value;
    }

    get data(){
        return this._data
    }

    get amount(){
        return this._amount * this._value
    }

    get value(){
        return this._value
    }
}