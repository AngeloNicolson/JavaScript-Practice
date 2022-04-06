// Loop over the celestial bodies. Feel free to comment out each loop to see how they work indevidually
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
// This shows you whats in the above array
console.log(`Planets on array: ${celestialBodies}`);

//This is how loops work
// for ([initialization]; [condition]; [final - expression]) statement;

// FIRST LOOP (For Loop)
// For loop that will loop over celestialBodies as long as [i] is less than the celestialBodies array
// This also lets me pull out either the whole array one by one from the loop above, or select one planet/s through the[i].
for (let i = 0; i < celestialBodies.length; i++) {
  const element = celestialBodies[i];
  console.log(`First-Loop: ${element}`);
}

// SECOND LOOP (For OF Loop)
// This assigns each value of the array as a planet
for (let planet of celestialBodies) {
  planet;
  console.log(`Second-Loop: ${planet}`);
}

// Third LOOP (While Loop)
// Remember .pop takes from the end of the array .shift from the beginning
// In these console logs, you can see the planets being taken away one by one
while (celestialBodies.length > 0) {
  let planet = celestialBodies.shift();
  console.log(`Third-Loop: ${planet}`);
  console.log(`Remaining on celestialBodies: ${celestialBodies}`);
}
