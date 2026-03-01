function compareValues(a, b) {
  return {
    loose: a == b,
    strict: a === b
  };
}

console.log(compareValues(0, -0));
console.log(compareValues(0, ""));
console.log(compareValues(0, null));
console.log(compareValues(null, undefined));
console.log(compareValues("hello", "olleh"));
console.log(compareValues(5, "5"));

