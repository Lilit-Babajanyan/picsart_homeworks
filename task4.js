function StringReverse(str) {
  let str1 = "";
  for (let i = 0; i < str.length; i++) {
    str1 += str[str.length - 1 - i];
  }
  return str1;
}

let str = "hello";
console.log(StringReverse(str));
