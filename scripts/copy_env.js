import fs from 'fs';

import projectDir from '../src/utils/projectDir';

import { copy } from './utils';

const [, , path] = process.argv;

fs.copyFileSync(`${projectDir}/.env.local`, `${projectDir}/${path}/.env.local`);

copy(`${projectDir}/src/shared/public`, `${projectDir}/${path}/public/shared`);
