export const completeUrl = (url = '') => (/^https?:\/\//.test(url) ? url : `https://${url}`);

export const removeOneSlashToUrl = (url = '') => url.substr(0, url.lastIndexOf('/'));
