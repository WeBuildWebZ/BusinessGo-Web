import { runExec, project } from './utils';

(async () => {
  await runExec(`cd ${project.path}; next build`);
  await runExec(`mv ${project.path}/.next .`);
  console.log('build finished!');
  await runExec('cp .next/routes-manifest.json .');
  await runExec('pwd');
  await runExec('ls -la');
})();
