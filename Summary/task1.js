let arr = [10,20,30];

function sum(n1, n2, n3){
    return n1+n2+n3;
}
console.log(sum.apply(arr, arr))