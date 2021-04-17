import { postFile } from '../../utils/postFile';

import { getBaseUrl } from './utils';

export const uploadFile = (project, file, onProgress = () => {}) => {
  const data = new FormData();

  data.append('upload_preset', project.cloudinary_settings.preset_name);
  data.append('file', file);

  return postFile(`${getBaseUrl(project)}/upload`, data, onProgress);
};
