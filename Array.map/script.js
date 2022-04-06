let numberArray = [1, 2, 3, 4, 5, 6, 7];
console.log([]);

const outcome = (number) => {
  return number;
  //return number + number;
};

const newArray = numberArray.map(outcome);

console.log(newArray);
