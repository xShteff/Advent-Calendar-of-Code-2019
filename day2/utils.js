module.exports = {
  printIntcodeFancy(data) {
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
  },
  printIntcodeInline(data) {
    let line = '';
    for (let i = 0; i < data.length; i++) {
      line += `${data[i]}, `;
    }
    console.log(line);
  },
};
