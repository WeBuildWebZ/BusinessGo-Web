import rimraf from 'rimraf';

import fs from 'fs';
import path from 'path';

import { copy } from '../utils';

import getProjectName from './getProjectName';

const project_name = getProjectName();

const copyFiles = async (bootstrapPath, dirPath) => {
  fs.mkdirSync(dirPath);
  await copy(bootstrapPath, dirPath);
  rimraf.sync(path.join(dirPath, '.next'));
};

export default copyFiles;
