let person1 = {
    name: "Lilit",
    age: 20,
    city: "Yerevan"
};

let person2 = {
    age: 25,
    job: "Developer"
};


let mergedPerson={};
Object.assign(mergedPerson, person1, person2);
/*
let mergedPerson ={
    ...person1,
    ...person2
}
    */
console.log(mergedPerson);