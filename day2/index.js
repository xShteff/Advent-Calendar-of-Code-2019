const utils = require('./utils');
const data = require('./input');
console.log(`Answer for Part 1 is: ${utils.doTrickery(data, 12, 2)}`);

// I'm not proud about this, but I'm too dumb to think right now.
// Also I've got an i9 9900k overclocked at 5.1GHz, it shouldn't take long.
for (var n = 0; n < 100; n++) {
  for (var v = 0; v < 100; v++) {
    if (utils.doTrickery(data, n, v) === 19690720) {
      console.log(`Answer for Part 2 is: ${100 * n + v}`);
    }
  }
}
