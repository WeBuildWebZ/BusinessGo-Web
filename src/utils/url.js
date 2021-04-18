export const completeUrl = (url = '') => (/^https?:\/\//.test(url) ? url : `https://${url}`);
