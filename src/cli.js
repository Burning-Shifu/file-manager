import { env, chdir, cwd } from 'process';
import readline from 'readline';
import handleCommand from './commands/handleCommand.js';

const getUsernameFromCLIArguments = () => {
  const args = process.argv.slice(2);
  const usernameArg = args.find((arg) => arg.startsWith('--username='));
  if (usernameArg) {
    const username = usernameArg.split('=')[1];
    return username;
  }
  return "Anonymus User";
};

const startCLI = async () => {
  const username = getUsernameFromCLIArguments();
  console.log(`Welcome to the File Manager, ${username}!`);
  chdir(env.HOME);
  console.log(`You are currently in ${cwd()}`);

  // Create readline interface for user interaction
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Handle input from user
  rl.on('line', (input) => {
    handleCommand(input);
    console.log(`You are currently in ${cwd()}`);
  });
};

export { startCLI };