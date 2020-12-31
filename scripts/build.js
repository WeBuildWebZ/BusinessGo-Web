import { runExec, project } from './utils';

(async () => {
  await runExec(`cd ${project.path}; next build`);
  await runExec('rm -rf .next');
  await runExec(`mv ${project.path}/.next .`);
  await runExec('rm -rf public');
  await runExec(`cp -r ${project.path}/public .`);

  if (process.env.NODE_ENV && process.env.NODE_ENV !== 'localhost') {
    // Remove slug size
    await runExec('rm -rf src');
    await runExec('rm -rf node_modules');
    await runExec('npm install next');
  }
})();
