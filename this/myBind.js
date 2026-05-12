Function.prototype.myBind = function(newThis, ...bindArgs){
    const obj = this;
    
    return function foo(...callArgs){
        const key = Symbol(2);
        newThis[key] = obj;
        const res = newThis[key](...bindArgs, ...callArgs);
        delete newThis[key];
        return res;
    };
};