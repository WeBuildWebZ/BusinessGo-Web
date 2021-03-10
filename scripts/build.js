import { runExec, copy } from './utils';
import { project } from './project';

(async () => {
  await runExec(`cd ${project.path}; next build`);
  await runExec(`cd ${project.path}; ls -la`);
  await runExec('rm -rf .next');
  await runExec(`mv ${project.path}/.next .`);
  await runExec('rm -rf public');
  await runExec(`cp -r ${project.path}/public .`);
  await runExec(`cp -r src/shared/public public/shared`);
})();
