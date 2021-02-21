const { execSync } = require('child_process');

execSync(`react-app-rewired build`, { stdio: [0, 1, 2] });
