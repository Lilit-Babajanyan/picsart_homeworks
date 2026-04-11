function checkProperty(obj, key) {

    if(Object.prototype.hasOwnProperty.call(obj, key)) {
        return "own";
    }

    let start = Object.getPrototypeOf(obj);

    while(start !== null) {
        if(Object.prototype.hasOwnProperty.call(start, key)){
            return "inherited";
        }
        start = start.__proto__;
    }
    return "not found";
}

const animal = { eats: true };
const dog = Object.create(animal);
dog.name = "Rex";

console.log(checkProperty(dog, "name")); 
console.log(checkProperty(dog, "eats")); 
console.log(checkProperty(dog, "age")); 

const obj = Object.create(null);
obj.value = 10;

console.log(checkProperty(obj, "value")); 
console.log(checkProperty(obj, "toString")); 
console.log(checkProperty({}, "toString")); 