function FalsyValues(value){
    if(value===0 || value==="" || value===null || value===undefined || value === NaN || value===-0 || value ===false){
        return true;
    }else {
        return false;
    }

}
console.log(FalsyValues(0));
console.log(FalsyValues(8));
console.log(FalsyValues(""));


/*

function isFalsy(value) {
  return !value;
}

console.log(isFalsy(0));          
console.log(isFalsy(""));         
console.log(isFalsy(null));       
console.log(isFalsy(undefined));  
console.log(isFalsy(NaN));        
console.log(isFalsy(false));     

*/