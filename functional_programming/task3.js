function pipe(...funcs) {
    return function(value) {
        let result = value;

        for (let i = 0; i < funcs.length; i++) {
            result = funcs[i](result);
        }
        return result;
   
    };
}
function add(n) {
    return n + 5;
}
function double(n) {
    return n * 2;
}
function sub(n) {
    return n - 4;
}

const func = pipe(add, double, sub);
console.log(func(2));