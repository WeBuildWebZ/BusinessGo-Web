import { getBaseUrl } from './utils';

export const uploadImage = (project, file) => {
  const formData = new FormData();

  formData.append('upload_preset', project.cloudinary_settings.preset_name);
  formData.append('file', file);

  return fetch(`${getBaseUrl(project)}/upload`, { method: 'post', body: formData }).then(response =>
    response.json()
  );
};
