Array.prototype.myMap = function(callback, newThisarg){
    if(typeof callback !== "function"){
        throw new TypeError("callback must be a function");
    }

    let arr = this;
    let newArr = [];

    for(let i = 0; i< arr.length; i++){
        if(i in arr){
            let res = callback.call(newThisarg, arr[i], i, arr);
            newArr.push(res);
        }
    }
    return newArr;
};