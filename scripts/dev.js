import fs from 'fs';

import projectDir from '../src/utils/projectDir';

import { runSpawn, project } from './utils';

fs.copyFileSync(`${projectDir}/.env.local`, `${projectDir}/${project.path}/.env.local`);

runSpawn('next', ['dev', project.path, project.name, '-p', project.port]);
