import { runExec, project } from './utils';

runExec(`cd ${project.path}; next build`).then(() => {
  runExec(`mv ${project.path}/.next .`);
});
