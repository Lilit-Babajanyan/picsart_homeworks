let arr = [1,2,3,4];
/*
let res = arr.map(x=> x+2);
console.log(res);
*/

function callback(array, value, i){
    return value+2;
}

function newArr(arr, callback){
    let newArray=[];
    for(let i = 0; i<arr.length; i++){
        newArray.push(callback(arr, arr[i], i));
    }
    return newArray;
}
console.log(newArr(arr, callback));