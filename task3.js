function SumOfNumbers(num1, num2) {
  if (typeof num1 !== "number" && typeof num2 !== "number") {
    console.log("Two operands must be numbers");
    return;
  }
  return num1 + num2;
}

let num1 = 54;
let num2 = 46;
console.log(SumOfNumbers(num1, num2));
