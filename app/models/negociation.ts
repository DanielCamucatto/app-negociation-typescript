export class Negociation {
    private _data; 
    private _amount;
    private _value;
    
    constructor(data, amount, value){
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