var inputData = require('./input');

function calculateFuel(val) {
    return Math.floor(val / 3 - 2);
}

let result = inputData.reduce((a, b) => {
    return a + calculateFuel(b);
}) - inputData[0] + calculateFuel(inputData[0]); // Botching this in for now

console.log(`The result is: ${result}`);

