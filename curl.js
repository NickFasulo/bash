const request = require('request');

module.exports = function (cmd, done) {
  const command = cmd.split(' ')[0];
  const url = cmd.split(' ')[1];

  if (command === 'curl') {
    request(url, function (err, response, body) {
      if (err) {
        throw err;
      } else {
        done(body.toString());
      }
    });
  }
};
