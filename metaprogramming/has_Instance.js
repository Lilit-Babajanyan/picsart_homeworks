let account = {
    balance: 1000,
    currency: "USD",

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