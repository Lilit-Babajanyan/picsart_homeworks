Array.prototype.mySome = function(callback, newThisarg){
    if(typeof callback !== "function"){
        throw new TypeError("callback must be a function");
    }

    let arr = this;

    for(let i = 0; i < arr.length; i++){
        if(i in arr){
            let res = callback.call(newThisarg, arr[i], i, arr);

            if(res){
                return true;
            }
        }
    }
    return false;
};