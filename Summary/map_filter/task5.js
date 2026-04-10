const users = [
    { name: "Lilit", age: 21 },
    { name: "Mary", age: 17 }
];

const result = users.filter(user => user.age >= 18);

console.log(result); 