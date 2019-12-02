const inputData = require('./input');

function printIntcodeFancy(data) {
  let index = 0;
  console.log('[');
  while (index < data.length) {
    let line = '\t';
    for (let x = 0; x < 4; x++) {
      if (data[index] === 99) {
        x = 4;
      }
      line += (data[index] !== undefined ? data[index] : '') + '\t';
      index++;
    }
    console.log(line);
  }
  console.log(']');
}

function printIntcodeInline(data) {
  let line = '';
  for (let i = 0; i < data.length; i++) {
    line += `${data[i]}, `;
  }
  console.log(line);
}

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
// let inputData = [1, 1, 1, 4, 99, 5, 6, 0, 99];
console.log('BEFORE: ');
printIntcodeFancy(inputData);
printIntcodeInline(inputData);
let index = 0;

while (index < inputData.length - 4) {
  switch (handleIntcode(inputData, index)) {
    case 1:
      index += 4;
      break;
    case 0:
      index += 1;
      break;
  }
}
console.log('AFTER: ');

printIntcodeFancy(inputData);
printIntcodeInline(inputData);
console.log(inputData[0]);
