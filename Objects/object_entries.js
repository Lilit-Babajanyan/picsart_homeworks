let student = {
    name: "Lilit",
    surname: "Babajanyan",
    age: 20,
    course:3

};

let entries=Object.entries(student);
console.log(entries);

let changed = entries.filter(([key , value])=>typeof value === "number");
console.log(changed);

let newObj=Object.fromEntries(entries);
console.log(newObj);