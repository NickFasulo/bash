const pwd = require('./pwd');
const ls = require('./ls');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', data => {
  const userInput = data.toString().trim(); // remove the newline
  const cmd = userInput.split(' ')[0];
  const file = userInput.split(' ')[1];

  // pwd(cmd);
  // ls(cmd);
});
