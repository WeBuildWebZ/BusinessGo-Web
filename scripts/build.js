import { runExec, project } from './utils';

(async () => {
  await runExec(`cd ${project.path}; next build`);
  await runExec(`mv ${project.path}/.next src`);
  console.log('build finished!');
  // await runExec('cp .next/routes-manifest.json .');
  await runExec('cd src; pwd');
  await runExec('cd src; ls -la');
})();
