export class Negociation {
    private _data: Date; 
    private _amount: number;
    private _value: number;
    
    constructor(data: Date, amount: number, value:number){
        this._data = data;
        this._amount = amount;
        this._value = value;
    }

    get data(): Date{
        return this._data
    }

    get amount(): Number{
        return this._amount * this._value
    }

    get value(): Number{
        return this._value
    }

    get volume(): Number {
        return this._amount * this._value;
    }
}