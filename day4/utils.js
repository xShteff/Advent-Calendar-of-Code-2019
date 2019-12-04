module.exports = {
  checkForDouble(password) {
    return /(11|22|33|44|55|66|77|88|99)/g.test(password);
  },
  checkIncreasedVal(inputNumber) {
    const inputNumberArray = `${inputNumber}`.split('');
    let prevNumber = parseInt(inputNumberArray[0]);
    for (let i = 1; i < inputNumberArray.length; i++) {
      if (prevNumber > parseInt(inputNumberArray[i])) {
        return false;
      }
      prevNumber = parseInt(inputNumberArray[i]);
    }
    return true;
  },
};
