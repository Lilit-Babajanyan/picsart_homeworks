function  myIsInteger(value){
       if(typeof value === "number" && 
        value === value &&
        value!==Infinity &&
        value !== -Infinity &&
        value % 1 === 0
       ){
        return true;
       }
       return false;
}

console.log(myIsInteger(15.1));
console.log(myIsInteger(12));
