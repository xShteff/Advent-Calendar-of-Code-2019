const input = {
  min: 109165,
  max: 576723,
};

const utils = require('./utils');

let count = 0;
for (let i = input.min; i <= input.max; i++) {
  if (utils.checkForDouble(i)) {
    if (utils.checkIncreasedVal(i)) {
      count++;
    }
  }
}

// function checkDoublePartTwo(inputNumber) {
//   return /(111|222|333|444|555|666|777|888|999)/g.test(inputNumber);
// }

console.log(`Answer for part 1 is: ${count}`);

// let countTwo = 0;
// for (let i = input.min; i <= input.max; i++) {
//   if (checkDoublePartTwo(i)) {
//     if (checkIncreasedVal(i)) {
//       countTwo++;
//     }
//   }
// }

// console.log(`Answer for part 1 is: ${countTwo}`);
