import { runExec, project } from './utils';

runExec(`cd ${project.path}; next build`).then(() => {
  runExec(`mv ${project.path}/.next .`).then(() => {
    setTimeout(() => {
      console.log('build finished!');
    }, 5000);
  });
});
