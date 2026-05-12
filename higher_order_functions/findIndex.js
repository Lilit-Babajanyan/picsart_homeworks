Array.prototype.myFindIndex = function (callback, newThisarg){
    if(typeof callback !== "function"){
        throw new TypeError("callback must be a function");
    }

    let arr = this;
    
    for(let i = 0; i < arr.length; i++){
        if( i in arr){
            let res = callback.call(newThisarg, arr[i], i, arr);

            if(res){
                return i;
            }
        }
    }
    return -1;
}