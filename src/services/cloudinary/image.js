import { getBaseUrl } from './utils';

export const uploadImage = (user, file) => {
  const formData = new FormData();

  formData.append('upload_preset', user.cloudinary_settings.preset_name);
  formData.append('file', file);

  return fetch(`${getBaseUrl(user)}/upload`, { method: 'post', body: formData }).then(response =>
    response.json()
  );
};
