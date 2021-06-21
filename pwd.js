const pwd = function (cmd) {
  if (cmd === 'pwd') {
    return __dirname;
  }
};

module.exports = pwd;
