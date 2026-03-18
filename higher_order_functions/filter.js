let arr =[1,2,3,4];
/*
let res = arr.filter(x=> x%2===0);
console.log(res);
*/
let res = [];
function impl(arr){
    for(let i = 0; i< arr.length; i++){
        if(arr[i]%2!==0){
            continue;
        }
        res.push(arr[i]);
    }
    return res;
}
console.log(impl(arr));