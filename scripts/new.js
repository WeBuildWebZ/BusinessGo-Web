import rimraf from 'rimraf';

import fs from 'fs';
import path from 'path';

import projects_json from '../projects.json';
import package_json from '../package.json';

import { runExec, copy } from './utils';

const [, , project_name] = process.argv;

if (projects_json[project_name]) throw new Error(`Ya existe el proyecto "${project_name}" en projects.json`);
if (package_json.scripts[project_name])
  throw new Error(`Ya existe el comando "${project_name}" en package.json`);

const getPaths = () => ({
  bootstrapPath: path.join(__dirname, '../src/projects/empty'),
  dirPath: path.join(__dirname, `../src/projects/${project_name}`)
});

const copyFiles = async (bootstrapPath, dirPath) => {
  fs.mkdirSync(dirPath);
  await copy(bootstrapPath, dirPath);
  rimraf.sync(path.join(dirPath, '.next'));
};

const setupConstants = dirPath => {
  const constants = require(path.join(dirPath, 'constants'));
  console.log('constants', constants);
};

(async () => {
  const { bootstrapPath, dirPath } = getPaths();
  if (fs.existsSync(dirPath)) throw new Error(`Ya existe la carpeta ${dirPath}`);

  await copyFiles(bootstrapPath, dirPath);
  setupConstants(dirPath);
})();
