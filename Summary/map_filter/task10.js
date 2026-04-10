const users = [
    { name: "Anna", age: 17 },
    { name: "John", age: 20 }
];

const result = users.filter(user => user.age >= 18).map(user => `${user.name} is ${user.age} years old`);

console.log(result); 