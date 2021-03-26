import fse from 'fs-extra';

import fs from 'fs';

import { runExec, copy } from './utils';
import { project } from './project';

(async () => {
  await runExec(`cd ${project.path} && next build`);
  fs.rmdirSync('.next', { recursive: true, force: true });
  fse.copySync(`${project.path}/.next`, '.next', { overwrite: true });
  fs.rmdirSync('public', { recursive: true, force: true });
  fse.copySync('src/shared/public', 'public/shared', { overwrite: true });
  fse.copySync(`${project.path}/public`, 'public', { overwrite: true });
})();
