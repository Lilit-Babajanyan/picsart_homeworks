let account = {
    balance: 10000,
    currency: "AMD",

    [Symbol.toPrimitive](hint) {
        if (hint === "number") {
            return this.balance;
        }

        if (hint === "string") {
            return `Account Balance: ${this.balance} ${this.currency}`;
        }
    return this.balance;
  }
};

console.log(+account);
console.log(String(account));
console.log(account + 5000);