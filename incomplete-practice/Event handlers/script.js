const myDisplayer = (something) => {
  console.log(">>" + something + "<<");
};
// console.log(somthing);

const myCalculator = (num1, num2, myCallback) => {
  const sum = num1 + num2;
  myCallback(sum);
};

myCalculator(1, 6, myDisplayer);
myCalculator(9, 68, myDisplayer);
