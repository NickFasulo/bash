const request = require('request');

module.exports = function (cmd) {
  const command = cmd.split(' ')[0];
  const url = cmd.split(' ')[1];

  if (command === 'curl') {
    request(url, function (err, response, body) {
      if (err) {
        throw err;
      } else {
        return body.toString();
      }
    });
  }
};
