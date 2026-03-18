function myRepeat(str, count){
    if(typeof str !== "string"){
        return false;
    }
    let res ="";
    for(let i = 0; i<count; i++){
        res+=str;
    }
    return res;
}

console.log(myRepeat("ha", 3));