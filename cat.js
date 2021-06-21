const fs = require('fs');

module.exports = function (cmd) {
  const command = cmd.split(' ')[0];
  const file = cmd.split(' ')[1];

  if (command === 'cat') {
    fs.readFile(file, (err, data) => {
      if (err) {
        throw err;
      }
      else {
        return data
      }
    })
  }
};
