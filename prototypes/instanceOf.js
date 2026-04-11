function Animal() {}
function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

function myInstanceOf(obj, Constructor) {
    if(obj === null || (typeof obj !== "object" && typeof obj !== "function")){
        return false;
    }

    let start = obj.__proto__;

    while(start !== null) {
        if(start === Constructor.prototype){
            return true;
        }
        start = start.__proto__;
    }
    return false;
 }


const dog = new Dog();

console.log(myInstanceOf(dog, Dog)); 
console.log(myInstanceOf(dog, Animal)); 
console.log(myInstanceOf(dog, Array)); 
console.log(myInstanceOf(null, Object)); 
console.log(myInstanceOf(123, Number)); 
console.log(myInstanceOf("hello", String)); 