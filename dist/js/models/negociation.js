export class Negociation {
    constructor(data, amount, value) {
        this.data = data;
        this.amount = amount;
        this.value = value;
    }
    get volume() {
        return this.amount * this.value;
    }
}
