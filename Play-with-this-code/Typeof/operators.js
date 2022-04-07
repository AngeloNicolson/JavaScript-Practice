// Type of number
console.log(typeof 123);
// String
console.log(typeof "Number");
// Boolean
console.log(typeof true);
// Undefined
console.log(typeof undefined);
// Object
console.log(typeof { age: 10 });
// Described as object but is actually a javascript bug. More info || https://2ality.com/2013/10/typeof-null.html
console.log(typeof null);
// This returns as an object even though it is an array.
// Thats because Javascript doesnt have the ability to differentiate between type object and an objects subtype.
// Arrays are a sub type of object with special methods on them.
console.log(typeof [1, 2, 3]);
