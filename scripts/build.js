import { runExec, project } from './utils';

runExec(`cd ${project.path}; next build`);
