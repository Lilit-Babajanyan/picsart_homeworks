class BankAccount {
    constructor() {
        this._balance = 5000;
    }

    set addMoney(value) {
        this._balance += value;
    }

    get newBalance() {
        return this._balance;
    }
}

const acc = new BankAccount();

acc.addMoney = 200;

console.log(acc.newBalance);