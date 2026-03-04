function EvenOrOdd(num){
    if (typeof num!== "number"){
        return;
    }
    if (num%2===0){
       return "even";
    }else {
        return "odd"; 
    }
}

console.log(EvenOrOdd(9));
console.log(EvenOrOdd(4));