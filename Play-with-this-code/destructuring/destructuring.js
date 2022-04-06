//Simple object
const person = {
  first: "Angelo",
  last: "Nicolson",
};
// Single object destructure
const { first, last } = person;
console.log(person);

// Nested Objects in object
const object = {
  firstName: "Angelo",
  lastName: "Nicolson",
  object1: {
    object2: {
      object3: {
        master: "Chief",
        harry: "Potter",
      },
      object4: {
        han: "Solo",
      },
    },
  },
};

// Function for renaming variables as I destructure them. master gets turned into man, harry gets turned into boy.
const { master: man, harry: boy } = object.object1.object2.object3;
console.log(`This is the renamed objects: ${man}, ${boy}`);

/* Destructuring several layers deep. Remember to call Layers like so: object.object1.object2.object3; */
const { master, harry } = object.object1.object2.object3;
const { han } = object.object1.object2.object4;

// logs the variables
console.log(master, harry, han);
