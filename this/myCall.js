Function.prototype.myCall = function (newThis, ...args){
    if(newThis === undefined || newThis === null){
        newThis = globalThis;
    }
    const obj = this;
    const temp = Symbol(2);
    newThis[temp] = obj;
    let res = newThis[temp](...args);
    delete newThis[temp];
    return res;
    }
