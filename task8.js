function substring(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    console.log("At least one input must be string.");
    return false;
  }
  return str1.includes(str2);
}

let str1 = "kjdkjdhoie";
let str2 = "kj";
console.log(substring(str1, str2));
