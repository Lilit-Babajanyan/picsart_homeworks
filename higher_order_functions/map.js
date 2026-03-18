let arr = [1,2,3,4];
/*
let res = arr.map(x=> x+2);
console.log(res);
*/
let newArr=[];
function impl(arr){
    for(let i =0; i<arr.length; i++){
        newArr.push(arr[i]+2)
    }
    return newArr;
}
console.log(impl(arr));
console.log(arr);
