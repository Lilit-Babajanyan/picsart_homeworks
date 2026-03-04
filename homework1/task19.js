function SumOfNumbers(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number" && Number.isFinite(num1) && Number.isFinite(num2)) {
    return num1 +num2;
  }
  return "Invalid Input";
}

let num1 = 6;
let num2 = Infinity;
console.log(SumOfNumbers(num1, num2));
