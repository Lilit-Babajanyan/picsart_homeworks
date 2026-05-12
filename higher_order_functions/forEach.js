Array.prototype.myForEach = function(callback, newThisarg){
    if(typeof callback !== "function"){
        throw new TypeError("callback must be a function");
    }

    const arr = this;
    for(let i = 0; i<arr.length; i++){
        if(i in arr){
            callback.call(newThisarg, arr[i], i, arr);
        }
    }
};