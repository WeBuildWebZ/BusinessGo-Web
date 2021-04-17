export const postFile = (url, data, onProgress = () => {}) =>
  new Promise(resolve => {
    const request = new XMLHttpRequest();
    request.open('POST', url);

    request.upload.addEventListener('progress', e => {
      const percent = (e.loaded / e.total) * 100;
      onProgress(percent);
    });

    request.addEventListener('load', e => {
      resolve({ status: request.status, data: JSON.parse(request.response) });
    });

    request.send(data);
  });
