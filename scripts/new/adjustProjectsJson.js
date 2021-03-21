import fs from 'fs';
import path from 'path';

import projectDir from '../../src/utils/projectDir';

import getProjectName from './getProjectName';

const project_name = getProjectName();

const adjustProjectsJson = projectsJson => {
  const projectsJsonPath = path.join(projectDir, 'projects.json');

  projectsJson[project_name] = {
    path: `src/projects/${project_name}`,
    repo: `https://{{GITHUB_TOKEN}}@github.com/Lefcott/BGO-${project_name}`
  };

  const fileContent = JSON.stringify(projectsJson, null, 2);

  fs.writeFileSync(projectsJsonPath, fileContent);
};

export default adjustProjectsJson;
