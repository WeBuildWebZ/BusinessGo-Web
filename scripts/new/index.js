import rimraf from 'rimraf';

import fs from 'fs';
import path from 'path';

import projects_json from '../../projects.json';
import package_json from '../../package.json';
import { runExec, copy } from '../utils';
import projectDir from '../../src/utils/projectDir';

import getProjectName from './getProjectName';
import copyFiles from './copyFiles';
import setupConstants from './setupConstants';
import setupSitemap from './setupSitemap';
import adjustPackageJson from './adjustPackageJson';
import adjustProjectsJson from './adjustProjectsJson';

const project_name = getProjectName();

if (projects_json[project_name]) throw new Error(`Ya existe el proyecto "${project_name}" en projects.json`);
if (package_json.scripts[project_name])
  throw new Error(`Ya existe el comando "${project_name}" en package.json`);

const getPaths = () => ({
  bootstrapPath: path.join(projectDir, 'src/projects/empty'),
  dirPath: path.join(projectDir, `src/projects/${project_name}`)
});

(async () => {
  const { bootstrapPath, dirPath } = getPaths();
  if (fs.existsSync(dirPath)) throw new Error(`Ya existe la carpeta ${dirPath}`);

  await copyFiles(bootstrapPath, dirPath);
  setupConstants(dirPath);
  setupSitemap(dirPath);
  adjustPackageJson(package_json);
  adjustProjectsJson(projects_json);
})();
