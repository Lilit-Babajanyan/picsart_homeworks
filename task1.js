function StringChars(str) {
  if (typeof str !== "string") {
    console.log("The input is not string");
    return;
  }
  return str.length;
}

let str1 = "Hello";
console.log(StringChars(str1));
