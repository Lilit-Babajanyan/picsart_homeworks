function myIsSafeInteger(value){
    if(typeof value !== "number" ||
        value!==value ||
        value === Infinity ||
        value===-Infinity ||
        value % 1 !== 0 ||
        value < Number.MIN_SAFE_INTEGER || value > Number.MAX_SAFE_INTEGER
    ){
        return false;
     }
     return true;
}

console.log(myIsSafeInteger(9007199254740992));
console.log(myIsSafeInteger(0.2));
