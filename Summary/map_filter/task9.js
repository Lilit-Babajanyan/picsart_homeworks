const products = [
  { name: "Phone", price: 800 },
  { name: "Computer", price: 1500 }
];

const result = products.filter(p => p.price > 1000);

console.log(result); 