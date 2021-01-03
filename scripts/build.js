import { runExec } from './utils';
import { project } from './project';

(async () => {
  await runExec(`cd ${project.path}; next build`);
  await runExec('rm -rf .next');
  await runExec(`mv ${project.path}/.next .`);
  await runExec('rm -rf public');
  await runExec(`cp -r ${project.path}/public .`);
})();
