let numberArray = [1, 2, 3, 4, 5, 6, 7];
console.log(`Original array: ${numberArray}`);

// Making the variable "outcome" and passing it to "number" which then number + number.   But really -- (outcome + outcome) --
const outcome = (number) => {
  const newNumber = number + number;
  console.log(
    `Outcome gets a number assigned to it from numberArray.map: ${number} + ${number} Then assign ${newNumber} to newArray`
  );
  return newNumber;
};

// Mapping over numberArray, This pushes number stored in array to outcome. Outcome returns number + number (outcome + outcome) to newArray
const newArray = numberArray.map(outcome);
console.log(
  `This gets passed into outcome then to number: ${numberArray} "this then gets multiplied by its own number through the outcome function. Continues with each array item passed from the .map function"`
);

console.log(`New array: ${newArray}`);
