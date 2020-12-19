import { runExec, project } from './utils';

(async () => {
  await runExec(`cd ${project.path}; next build`);
  await runExec(`sudo mv ${project.path}/.next .`);
})();
