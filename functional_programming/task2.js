function memorize(cb) {
    let cache = {};

    return function(arg) {
        if (arg in cache) {
            return cache[arg];
        }

        let result = cb(arg);
        cache[arg] = result;
        return result;
    };
}
function double(n) {
    return n * 2;
}

const funcDouble = memorize(double);

console.log(funcDouble(5)); 
console.log(funcDouble(7)); 