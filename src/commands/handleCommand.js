import { goToPreviousFolder, goToDedicatedFolder, showListOfContent } from './navigation.js';

const handleCommand = (command) => {
  const [operation, ...args] = command.split(' ');

  switch (operation) {

    case 'up':
      goToPreviousFolder();
      break;

    case 'cd':
      goToDedicatedFolder(...args);
      break;

    case 'ls':
      showListOfContent();
      break;

    // case '':

    //   break;

    // case '':

    //   break;

    // case 'cp':
    //   copy(...args);
    //   break;
    // case 'mv':
    //   move(...args);
    //   break;
    // case 'rm':
    //   deleteFile(...args);
    //   break;

    default:
      console.error('Unknown command.');
      break;
  }
}

export default handleCommand;