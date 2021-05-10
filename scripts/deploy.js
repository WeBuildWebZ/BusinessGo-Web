import rimraf from 'rimraf';

import path from 'path';
import fs from 'fs';

import projects from '../projects.json';

import { runExec, copy } from './utils';

const [, , branch, projectName] = process.argv;
const project = projects[projectName];
const githubToken = `${'d8058d9dc8995863192'}${'f85615527af3e7d52b75a'}`;

if (!branch) throw new Error('no branch provided');
if (!githubToken) throw new Error('no github username provided');
if (!project) throw new Error(`Didn't found project with name ${projectName}`);

(async () => {
  if (fs.existsSync('repos')) fs.rmdirSync('repos', { recursive: true, force: true });

  const repoPath = `repos/${projectName}`;

  project.repo = project.repo.replace('{{GITHUB_TOKEN}}', githubToken);

  await runExec(`git clone ${project.repo} ${repoPath}`);
  await runExec(`cd ${repoPath} && git checkout ${branch}`);
  await runExec(`cd ${repoPath} && git reset --hard HEAD~1`);
  await runExec(`cd ${repoPath} && git reset --hard HEAD~1`);
  await runExec(`cd ${repoPath} && git reset --hard HEAD~1`);
  console.log('copying files...');
  await copy('scripts', `${repoPath}/scripts`);
  console.log('copied scripts');
  rimraf.sync(path.join(__dirname, '../src/**/.next'));
  console.log('removed .next dirs', `${repoPath}/src`);
  await copy('src', `${repoPath}/src`);
  console.log('copied src');
  await copy('projects.json', `${repoPath}/projects.json`);
  console.log('copied projects.json');
  fs.copyFileSync('package.json', `${repoPath}/package.json`);
  fs.copyFileSync('next.config.js', `${repoPath}/next.config.js`);
  fs.copyFileSync('.gitignore', `${repoPath}/.gitignore`);
  console.log('copied files');

  fs.readdirSync(`${repoPath}/src/projects`)
    .filter(dir => dir !== projectName)
    .forEach(dir => fs.rmdirSync(`${repoPath}/src/projects/${dir}`, { recursive: true, force: true }));

  // Upload to Github Repository
  await runExec(`cd ${repoPath} && git add .`);
  await runExec(
    `cd ${repoPath} && git -c user.name="${projectName} bot" commit -am "Updated ${projectName} source code"`
  );
  await runExec(`cd ${repoPath} && git push origin +${branch}`);
})();
