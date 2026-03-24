let arr = [1,2,3,4];
/*
console.log(arr.every(x=>x<4));
*/
function callback(value, array, i){
        return value<4;
}

function impl(arr, callback){
    for(let i = 0; i<arr.length; i++){
        if(!callback(arr[i], arr, i)){
            return false;
        }
    }
    return true;
}

console.log(impl(arr, callback));