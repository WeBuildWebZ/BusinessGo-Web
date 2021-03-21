import fs from 'fs';
import path from 'path';

import getProjectName from './getProjectName';

const project_name = getProjectName();

const setupSitemap = dirPath => {
  const sitemapPath = path.join(dirPath, 'public/sitemap.xml');
  let sitemap = fs.readFileSync(sitemapPath).toString();

  while (sitemap.indexOf('https://www.empty.webuildwebz.com') !== -1)
    sitemap = sitemap.replace(
      'https://www.empty.webuildwebz.com',
      `https://www.${project_name}.webuildwebz.com`
    );

  fs.writeFileSync(sitemapPath, sitemap);
};

export default setupSitemap;
