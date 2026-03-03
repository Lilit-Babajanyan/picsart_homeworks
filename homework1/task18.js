function TypeOfValue(value){
    if(typeof value === "object" || value === null){
        return false;
    }else{
        return true;
    }
}

let value = "hello";
console.log(TypeOfValue(value));
