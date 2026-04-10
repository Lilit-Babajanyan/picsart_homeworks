class Product {
    constructor() {
        this._price;
    }

    set setPrice(price) {
        this._price = price;
    }

    get getPrice() {
        return this._price * 0.9;
    }
}

const productObj = new Product();

productObj.setPrice = 30;

console.log(productObj.getPrice);
