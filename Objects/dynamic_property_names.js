let obj = {
    name: "Lilit",
    age: 20
};

let keys = ["name", "age", "course"];
let dynamic_obj = {};

for (let key of keys) {
    dynamic_obj[key] = obj[key]; 
}

console.log(dynamic_obj);