function getType(value) {
  if (value === null) return "null";             
  if (Array.isArray(value)) return "array";      
  return typeof value;                           
}
console.log(getType(22));                
console.log(getType("hello"));           
console.log(getType(true));             
console.log(getType(null));              
console.log(getType({ a: 1 }));         
console.log(getType(function(){}));     
console.log(getType(undefined));         
console.log(getType([1, 2, "hello",3]));  