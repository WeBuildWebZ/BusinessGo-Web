import projects from '../projects.json';

const projectName = process.argv[2] || process.env.PROJECT_NAME;
const project = projects[projectName];

if (!project) throw new Error(`Project with name ${projectName} not found`);

console.log('using project', project);
project.name = projectName;

export { project };
