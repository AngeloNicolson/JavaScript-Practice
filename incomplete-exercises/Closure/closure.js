function ask(question) {
  return function holdYourQuestion() {
    console.log(question);
  };
}
var myQuestion = ask("What is closure");

myQuestion();

// Need to understand this and block scoping!!!!!
