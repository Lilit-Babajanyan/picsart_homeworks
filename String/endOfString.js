function myEndsWith(str, sub){
    if(typeof str !== "string" || typeof sub!=="string" || sub.length > str.length ){
        return false;
    }
    let startIndex = str.length - sub.length;

    for(let i =0; i<sub.length; i++){
        if(sub[i]!==str[startIndex+i]){
            return false;
        }
    }
    return true;
}
console.log(myEndsWith("javascript", "script")); 