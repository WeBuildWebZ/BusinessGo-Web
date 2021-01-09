/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
import { ncp } from 'ncp';

import { spawn, exec } from 'child_process';

export const runSpawn = (command, options = []) => {
  console.log(`--- ${command} ${options.join(' ')}`);
  spawn(command, options, { stdio: 'inherit' });
};

export const runExec = command =>
  new Promise(resolve => {
    console.log(`--- ${command}`);
    const child = exec(command);

    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
    child.on('close', resolve);
  });

export const copy = (source, destination) =>
  new Promise(resolve => {
    ncp(source, destination, err => {
      if (err) throw new Error(err);
      resolve();
    });
  });
