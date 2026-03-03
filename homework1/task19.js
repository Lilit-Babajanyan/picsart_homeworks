function SumOfNumbers(num1, num2) {
  if (typeof num1 !== "number" && typeof num2 !== "number") {
    return "Invalid Input";
  }
  return num1 + num2;
}

let num1 = "hi";
let num2 = "hello";
console.log(SumOfNumbers(num1, num2));
