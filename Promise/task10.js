function pay(balance, amount){
    return new Promise((resolve, reject) => {
        if (amount <= balance){
            resolve("Payment successful");
        }else {
            reject("not enough money");
        }
});
}

pay(5000, 6000)
.then(res =>console.log(res))
.catch(res => console.log(res))