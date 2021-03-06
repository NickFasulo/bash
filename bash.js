const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

const done = output => {
  process.stdout.write(output);
  process.stdout.write('\nPrompt > ');
};

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', data => {
  const cmd = data.toString().trim(); // remove the newline

  pwd(cmd, done);
  ls(cmd, done);
  cat(cmd, done);
  curl(cmd, done);
});
