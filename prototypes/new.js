function User(name) {
    this.name = name;
}

function Car(model) {
    this.model = model;
    return { custom: "returned object" };
}

function Empty() {}

function Test() {
    return 123;
}

function myNew(Constructor, ...args) {

    const obj = {};
    obj.__proto__ === Constructor.prototype;
  
    const result = Constructor.apply(obj, args);

    if (result !== null && (typeof result === "object" || typeof result === "function")) {
        return result;
    }

    return obj;
}

const user = myNew(User, "Alex");
console.log(user.name); 
console.log(Object.getPrototypeOf(user) === User.prototype); 
console.log(user.constructor === User); 

const car = myNew(Car, "BMW");
console.log(car.custom); 

const obj = myNew(Empty);
console.log(Object.getPrototypeOf(obj) === Empty.prototype); 

const test = myNew(Test);
console.log(Object.getPrototypeOf(test) === Test.prototype); 

