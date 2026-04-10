class Cart {
    constructor() {
        this._total = 0;
    }

    set total(value) {
        this._total += value;
    }

    get total() {
        return this._total;
    }
}

const obj = new Cart();

obj.total = 1000;

console.log(obj.total);