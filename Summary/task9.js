function execute(fn, arr) {
    return fn.apply(null, arr);
}

function sum(a, b, c) {
    return a + b + c;
}

console.log(execute(sum, [2, 4, 6])); 