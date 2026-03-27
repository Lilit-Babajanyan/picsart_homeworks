let arr = [1, 2, 3, 4, 5];

function callback(value, i, array){
    return value<2;
}

function impl(arr, callback){
    for(let i = 0; i<arr.length; i++){
        if(callback(arr[i], i, arr)){
            return i;
        }
        }
        return -1;
    }
    
console.log(impl(arr, callback));
