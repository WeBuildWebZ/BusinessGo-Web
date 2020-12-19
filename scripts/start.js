import { runSpawn, project } from './utils';

runSpawn('next', ['start', project.path, project.name, project.templateName]);
