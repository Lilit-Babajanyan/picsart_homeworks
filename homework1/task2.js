function toUpper(str){
    if (typeof str !== "string") {
    console.log("The input is not string");
    return;
  }
  return str.toUpperCase();
}

let str1="hello";
console.log(toUpper(str1));
