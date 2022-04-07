// Test one
function ask(question) {
  return function holdYourQuestion() {
    console.log(question);
  };
}
var myQuestion = ask("What is closure");

myQuestion();

// Need to understand this and block scoping!!!!!

// Block scope
for (let i = 0; i < 3; i++) {
  const log = () => {
    console.log(i); // Output 0, 1, 2
  };

  setTimeout(log, 100);
}

for (var i = 0; i < 3; i++) {
  const log = () => {
    console.log(i); // Output 3, 3, 3
  };

  setTimeout(log, 100);
}
