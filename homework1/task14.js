function isValidNumber(value) {
  return typeof value === "number" &&
         !isNaN(value) &&
         isFinite(value) &&
         Number.isSafeInteger(value);
}

console.log(isValidNumber(22));          
console.log(isValidNumber(Infinity));    
console.log(isValidNumber("22"));       
console.log(isValidNumber(9007199254740991)); 
console.log(isValidNumber(9007199254740992)); 