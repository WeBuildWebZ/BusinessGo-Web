import fs from 'fs';
import path from 'path';

import projectDir from '../../src/utils/projectDir';

import getProjectName from './getProjectName';

const project_name = getProjectName();

const adjustPackageJson = packageJson => {
  const packageJsonPath = path.join(projectDir, 'package.json');

  packageJson.scripts[
    project_name
  ] = `npm run copy-env src/projects/${project_name} && next dev src/projects/${project_name}`;

  const fileContent = JSON.stringify(packageJson, null, 2);

  fs.writeFileSync(packageJsonPath, fileContent);
};

export default adjustPackageJson;
