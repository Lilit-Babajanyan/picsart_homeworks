const users = [
    { name: "Lilit", age: 21 },
    { name: "Mary", age: 18 }
];

const result = users.filter(user => user.age >= 18).map(user => user.name);

console.log(result); 