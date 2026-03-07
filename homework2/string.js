function repeatString(str, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += str;
    }
    return result;
}
console.log(repeatString("x", 1)); 
console.log(repeatString("hi", 4)); 