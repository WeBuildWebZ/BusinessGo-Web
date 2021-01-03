/* eslint-disable no-await-in-loop */
import { ncp } from 'ncp';

import projects from '../projects.json';

import { runExec } from './utils';

const projectNames = Object.keys(projects);

const [, , branch] = process.argv;

const copy = (source, destination) =>
  new Promise(resolve => {
    ncp(source, destination, (err, test) => {
      if (err) throw err;
      resolve();
    });
  });

(async () => {
  if (!branch) throw new Error(`invalid branch ${branch}`);

  await runExec('rm -rf repos');
  for (let i = 0; i < projectNames.length; i += 1) {
    const projectName = projectNames[i];
    const project = projects[projectName];
    const repoPath = `repos/${projectName}`;

    await runExec(`git clone ${project.repo} ${repoPath}`);
    await runExec(`cd ${repoPath} && git checkout ${branch}`);
    await runExec(`cd ${repoPath} && git reset --hard HEAD^`);
    await copy('scripts', `${repoPath}/scripts`);
    await copy('src', `${repoPath}/src`);
    await copy('projects.json', `${repoPath}/projects.json`);
    await runExec(`cp package.json ${repoPath}`);
    await runExec(`cp next.config.js ${repoPath}`);
    await runExec(`cp .gitignore ${repoPath}`);

    // Upload to Github Repository
    await runExec(`cd ${repoPath} && git add .`);
    await runExec(`cd ${repoPath} && git commit -am "Updated ${projectName} build"`);
    await runExec(`cd ${repoPath} && git push origin +${branch}`);
  }
})();
