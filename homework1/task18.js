function TypeOfValue(value){
    if(typeof value === "object" ||  typeof value === "function" || value===null){
        return false;
    } else {
        return true;
    }
}
let value = "hello";
console.log(TypeOfValue(value));
console.log(TypeOfValue(null));
console.log(TypeOfValue(NaN));