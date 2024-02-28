/**
 * Interactive script to print user's name
 *  - Prompts user to enter user name (stdin)
 *  - Display entered user name (stdout)
 *  - Notifies user when exiting (exit)
 */

const { stdout, stdin } = process;

stdout.write('Welcome to Holberton School, what is your name?\n');

stdin.once('data', (data) => {
  const name = data.toString().trim();
  stdout.write(`Your name is: ${name}\n`);
  stdout.write('This important software is now closing\n');
});
