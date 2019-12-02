const utils = require('./utils');
const dataBackup = require('./input');

function doTrickery(noun, verb) {
  const inputData = [...dataBackup];
  inputData[1] = noun;
  inputData[2] = verb;

  let index = 0;

  while (index < inputData.length - 4) {
    switch (utils.handleIntcode(inputData, index)) {
      case 1: // 1 or 2
        index += 4;
        break;
      case 0: // 99
        index += 1;
        break;
    }
  }
  // utils.printIntcodeFancy(inputData);

  return inputData[0];
}

console.log(`Answer for Part 1 is: ${doTrickery(12, 2)}`);

// I'm not proud about this, but I'm too dumb to think right now.
// Also I've got an i9 9900k overclocked at 5.1GHz, it shouldn't take long.
console.log('Working...');
for (var n = 0; n < 100; n++) {
  for (var v = 0; v < 100; v++) {
    if (doTrickery(n, v) === 19690720) {
      console.log(`Found! Noun: ${n} Verb: ${v}`);
      console.log(`Answer for Part 2 is: ${100 * n + v}`);
    }
  }
}
console.log('Done');
