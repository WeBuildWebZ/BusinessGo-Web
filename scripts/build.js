import { runExec, project } from './utils';

runExec(`cd ${project.path}; next build`).then(() => {
  runExec(`mv ${project.path}/.next .`).then(() => {
    setTimeout(() => {
      console.log('build finished!');
      runExec('locate routes-manifest.json');
    }, 5000);
  });
});
