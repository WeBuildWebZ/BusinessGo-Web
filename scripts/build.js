import { runExec, project } from './utils';

runExec(`cd ${project.path}; next build`).then(() => {
  runExec(`mv ${project.path}/.next .`).then(() => {
    setTimeout(async () => {
      console.log('build finished!');
      await runExec('pwd');
      await runExec('ls -la');
    }, 5000);
  });
});
