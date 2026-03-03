function EvenOrOdd(num){
    if (typeof num!== "number"){
        return;
    }
    if (num%2===0){
        console.log("num is even");
    }else {
        console.log("num is odd");
    }
}

EvenOrOdd(9);
EvenOrOdd(4);