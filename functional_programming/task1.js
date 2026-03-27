function curry(fn) {
    let args = [];

    function curried(...newArgs) {
        args.push(...newArgs);
        if (args.length >= fn.length) {
            let result = fn(...args);
            args = [];
            return result;
        } else {
            return curried;
        }
    }

    return curried;
}

function sum(a, b, c) {
    return a + b + c;
}

var funcSum = curry(sum);

console.log(funcSum(1)(2, 3));      
console.log(funcSum(1, 2, 3));
console.log(funcSum(1)(2)(3));