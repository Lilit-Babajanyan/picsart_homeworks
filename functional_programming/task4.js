function trace(fn) {
    function wrapper(...args) {
        let usedArgs = args.slice(0, fn.length);
        let output = fn(...usedArgs);
        wrapper.history.push({ args: usedArgs, output: output });
        return output;
    }
    wrapper.history = [];
    return wrapper;
}

function foo(a, b) {
    return a + b;
}

const funcTraced = trace(foo);
console.log(funcTraced(2, 4, 6));  
console.log(funcTraced.history);