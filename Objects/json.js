function isEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

let obj1 = { name: "Lilit", age: 17 };
let obj2 = { name: "Lilit", age: 17 };
let obj3 = { name: "Lilit", age: 21 };
console.log(isEqual(obj1, obj2)); 
console.log(isEqual(obj1, obj3)); 