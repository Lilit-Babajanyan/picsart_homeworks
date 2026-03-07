function sumUpTo(n) {
    if(n===0){return 0;}
    return n + sumUpTo(n-1)
}
console.log(sumUpTo(3));