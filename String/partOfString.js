function mySlice(str, start, end){
    if(typeof str!=="string") { return false;}

    if (end === undefined || end > str.length) {
        end = str.length;
    }

    if (start < 0) start = 0;
    if (start > str.length) start = str.length;

    let result = "";
    for (let i = start; i < end; i++) {
        result += str[i];
    }

    return result;
}

console.log(mySlice("javascript", 0, 4));  
console.log(mySlice("hello", 1, null));

/* function mySlice(str, start, end) {
    if (typeof str !== "string") return "";

    return str.slice(start, end);
}

*/