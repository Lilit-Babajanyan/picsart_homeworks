function power(base, exp) {
    if (exp === 0) return 1; 
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}

console.log(power(5, 0)); 
