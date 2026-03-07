function countDigits(n){
    let count = 0;
    n=Math.abs(n);
    while(n!==0){
        n=Math.floor(n/10);
        count++;
    }
    return count;
}

console.log(countDigits(1458765));