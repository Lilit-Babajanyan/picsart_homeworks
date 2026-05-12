Function.prototype.myApply = function (newThis, args){
    if(newThis === undefined || newThis === null){
        newThis = globalThis;
    }
    let obj = this;
    let key = Symbol(2);
    newThis[key] = obj;
    let res = newThis[key](...args);
    delete newThis[key];
    return res;
}