const utils = require('./utils');
const inputData = require('./input');
inputData[1] = 12;
inputData[2] = 2;

function handleIntcode(data, index) {
  switch (data[index]) {
    case 1:
      data[data[index + 3]] = data[data[index + 1]] + data[data[index + 2]];
      break;
    case 2:
      data[data[index + 3]] = data[data[index + 1]] * data[data[index + 2]];
      break;
    case 99:
      return 0;
    default:
      return -1;
  }
  return 1;
}

let index = 0;

while (index < inputData.length - 4) {
  switch (handleIntcode(inputData, index)) {
    case 1: // 1 or 2
      index += 4;
      break;
    case 0: // 99
      index += 1;
      break;
  }
}
console.log('Final Intcode:');
utils.printIntcodeFancy(inputData);

console.log(`Answer for part 1 is: ${inputData[0]}`);
