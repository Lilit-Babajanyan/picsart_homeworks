let arr =[1,2,3,4];
/*
let res = arr.filter(x=> x%2===0);
console.log(res);
*/
function callback(value, i, array){
    if(value%2===0){
        return true;
    }else{
        return false;
    }
}

function impl(arr, callback){
    let newArr=[];
    for(let i = 0; i<arr.length; i++){
        if(callback(arr[i], i, arr)===true){
            newArr.push(arr[i]);
        }else{
            continue;
        }
    }
    return newArr;
}
console.log(impl(arr, callback));