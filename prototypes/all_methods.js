function User(name) {
    this.name = name;
}

User.prototype.sayHi = function () {
    return `Hi, ${this.name}`;
};

User.prototype.getName = function () {
    return this.name;
};

function getPrototypeMethods(obj) {
    const start = obj.__proto__;

    if(!start) {
        return [];
    }

    const methods = [];
    for (let i in start) {
        if(typeof start[i] === "function"){
            methods.push(i);
        }
    }
    return methods;
}

const user = new User("Alex");

console.log(getPrototypeMethods(user)); 
console.log(getPrototypeMethods({ a: 1 })); 
console.log(getPrototypeMethods([]).includes("push")); 

const base = {
 x: 10,
 print() {
   return "hello";
 }
};

const obj = Object.create(base);

console.log(getPrototypeMethods(obj)); 
console.log(getPrototypeMethods(Object.create(null))); 