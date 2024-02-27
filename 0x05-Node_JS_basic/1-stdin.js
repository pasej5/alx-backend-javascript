/**
 * Interactive script to print user's name
 *  - Prompts user to enter user name (stdin)
 *  - Display entered user name (stdout)
 *  - Notifies user when exiting (exit)
 */

const { stdout, stdin } = process;

stdout.write('Welcome to Holberton School, what is your name?\n');

stdin.setEncoding('utf-8');
stdin.on('data', (data) => {
  const name = data.trim();
  stdout.write(`Your name is: ${name}\n`);
  process.exit();
});

process.on('exit', () => {
  stdout.write('This important software is now closing\n');
});
