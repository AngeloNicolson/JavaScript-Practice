// Loop over the celestial bodies
const celestialBodies = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
];
console.log(celestialBodies);

// For loop
// for (let i = 0; index < celestialBodies.length; index++) {
//   const element = array[index];
// }

// While loop. || Remember .pop takes from the end of the array .shift from the beginning
// In the console log, you can see the planets being taken away one by one
while (celestialBodies.length > 0) {
  let planet = celestialBodies.shift();
  console.log(`celestialBodies Array: ${celestialBodies}`);
  //console.log(planet);
}
