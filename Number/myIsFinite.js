function myIsFinite(value){
    if(typeof value==="number" &&
        value!==Infinity &&
        value!==-Infinity &&
        value===value
    ){
        return true;
    }
    return false;
}

console.log(myIsFinite(15));
