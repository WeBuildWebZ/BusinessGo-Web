import { runSpawn, project } from './utils';

console.log('starting project');
runSpawn('next', ['start', project.path, project.name, project.templateName]);
