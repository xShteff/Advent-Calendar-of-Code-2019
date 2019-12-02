var inputData = require("./input");

function calculateFuel(val) {
  return Math.floor(val / 3 - 2);
}

let totalFuel =
  inputData.reduce((a, b) => {
    return a + calculateFuel(b);
  }) -
  inputData[0] +
  calculateFuel(inputData[0]); // Botching this in for now

console.log(`The amount of fuel required is: ${totalFuel}`);

let p2Data = inputData.map((val, index) => {
  let fuelIncrement = calculateFuel(val);
  let fuelSum = fuelIncrement;
  while (fuelIncrement > 0) {
    fuelIncrement = calculateFuel(fuelIncrement);
    if (fuelIncrement > 0) {
      fuelSum += fuelIncrement;
    }
  }
  return fuelSum;
});

console.log(
  `Total amount fuel required (p2): ${p2Data.reduce((a, b) => a + b)}`
);
