function points() {
  return this.name + " has " + this.points + " points";
}

const p1 = { name: "Anna", points: 10 };
const p2 = { name: "Mark", points: 25 };

console.log(points.call(p1));
console.log(points.apply(p2)); 