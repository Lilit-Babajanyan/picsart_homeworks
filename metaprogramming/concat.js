let digits = [1, 2, 3];
let extraNumbers = {
    0 : 5,
    1 : 10,
    length : 2,

    [Symbol.isConcatSpreadable]: true
}

let bonus = [4, 5];
bonus[Symbol.isConcatSpreadable] === false,

console.log(digits.concat(extraNumbers));
console.log(digits.concat(bonus));