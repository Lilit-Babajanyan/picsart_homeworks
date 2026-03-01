function toNumberOrNull(value) {
  let num = Number(value);
  return isNaN(num) ? null : num;
}

console.log(toNumberOrNull("22"));       
console.log(toNumberOrNull("hello"));    
