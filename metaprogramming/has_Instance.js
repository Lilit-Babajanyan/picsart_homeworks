class OddValidator {
    static [Symbol.hasInstance](value) {
    
        if (typeof value !== "number") {
            return false;
        }

        return value % 2 !== 0;
  }
}

console.log(5 instanceof OddValidator);   
console.log(10 instanceof OddValidator); 
console.log("7" instanceof OddValidator); 