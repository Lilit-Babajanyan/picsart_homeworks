let arr = [8,2,10];
/*
console.log(arr.some(x=> x<3));
*/
function callback(value, i, array){
    return value<3;
}

function impl(arr, callback){
    for(let i = 0; i<arr.length; i++){
        if(callback(arr[i], i, arr)){
            return true;
        }
    }
    return false;
}

console.log(impl(arr, callback));