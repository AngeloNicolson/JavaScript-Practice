// Teacher is declared in the global scope and can be set and accessed
let teacher = "Kyle";
console.log(`Setting teacher to: ${teacher}`);

// Bellow function the scope of otherClass. Outside of this function is the global scope
function otherClass() {
  teacher = "Suzy";
  topic = "React";
  console.log(`teacher has now been set to: ${teacher}`);
}
// otherClass needs to be called to be able to access it outside of scope. Uncomment console.log(topic), It returns undefined because it is locked in the otherClass "scope"
// Now uncomment otherClass to see the change.
//otherClass();
//console.log(topic);

//dont touch this. this tells you if teacher has not been set to Suzy
if (teacher == "Kyle") {
  console.log("If other class is not called the this will say Kyle");
}
