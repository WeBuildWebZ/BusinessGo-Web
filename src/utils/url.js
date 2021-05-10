export const completeUrl = (url = '') => (/^https?:\/\//.test(url) ? url : `https://${url}`);

export const removeOneSlashToUrl = (url = '') => url.substr(0, url.lastIndexOf('/'));

export const getSubdomains = hostname => {
  let subdomains = hostname.split('.');
  subdomains =
    subdomains[subdomains.length - 1] === 'localhost'
      ? subdomains.slice(0, subdomains.length - 1)
      : subdomains.slice(0, subdomains.length - 2);
  if (subdomains[0] === 'www') return subdomains.slice(1).join('.');
  return subdomains.join('.');
};
