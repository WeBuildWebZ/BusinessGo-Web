import fs from 'fs';

import projectDir from '../src/utils/projectDir';

const [, , path] = process.argv;

fs.copyFileSync(`${projectDir}/.env.local`, `${projectDir}/${path}/.env.local`);
