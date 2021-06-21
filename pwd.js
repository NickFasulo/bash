const pwd = function (cmd, done) {
  if (cmd === 'pwd') {
    done(__dirname);
  }
};

module.exports = pwd;
