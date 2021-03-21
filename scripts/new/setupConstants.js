import fs from 'fs';
import path from 'path';

import getProjectName from './getProjectName';

const project_name = getProjectName();

const setupConstants = dirPath => {
  const constantsPath = path.join(dirPath, 'constants.js');
  let constants = fs.readFileSync(constantsPath).toString();

  while (constants.indexOf("'empty'") !== -1) constants = constants.replace("'empty'", `'${project_name}'`);

  while (constants.indexOf('https://www.empty.webuildwebz.com') !== -1)
    constants = constants.replace(
      "'https://www.empty.webuildwebz.com'",
      `'https://www.${project_name}.webuildwebz.com'`
    );

  fs.writeFileSync(constantsPath, constants);
};

export default setupConstants;
