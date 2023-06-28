import { readdir, stat } from 'fs/promises';
import { join, normalize } from 'path';
import { chdir, cwd } from 'node:process';

const goToPreviousFolder = () => {
  let pathToPrevFolder = normalize(join(cwd(), '..'));
  chdir(pathToPrevFolder);
};

const goToDedicatedFolder = (command) => {
  chdir(normalize(command));
};

const showListOfContent = async () => {
  const fileNames = await readdir(cwd());
  const files = await Promise.all(
    fileNames.map(async (fileName) => {
      const stats = await stat(`${cwd()}/${fileName}`);

      const type = () => {
        if (stats.isDirectory()) return "directory"
        return "file"
      }

      const size = () => {
        if (stats.isDirectory()) return "-"
        const sizeInMB = stats.size / 1_048_576;
        return sizeInMB.toFixed(3);
      }

      return {
        name: fileName,
        Type: type(),
        sizeInMB: size(),
      };
    }),
  );
  sortDirectory(files);
  console.table(files);
};

const sortDirectory = (arr) => {
  arr.sort((a, b) => {
    if (a.Type === b.Type) {  // If both are the same type (i.e., both are directories or both are files)
      return a.name.localeCompare(b.name);  // sort alphabetically
    }
    return a.Type === 'directory' ? -1 : 1;  // If different types, directories go first
  });
};

export { goToPreviousFolder, goToDedicatedFolder, showListOfContent };