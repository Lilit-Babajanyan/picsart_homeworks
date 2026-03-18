function myIndexOf(str, search) {
    if (typeof str !== "string" || typeof search !== "string") {return false;};
    
    if (search.length === 0){return 0};
    outerLoop: 
    for (let i = 0; i <= str.length - search.length; i++) {
        for (let j = 0; j < search.length; j++) {
            if (str[i + j] !== search[j]) {
                continue outerLoop; 
            }
        }
        return i; 
    }
    
    
    return false;
}
console.log(myIndexOf("hello world", "world"));