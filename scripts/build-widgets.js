import { runExec, copy } from './utils';

(async () => {
  await runExec('react-app-rewired build');
  await runExec(`cp -r ./public/* ./dist`);
})();
