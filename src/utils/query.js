import qs from 'qs';

export const getQuery = () => (typeof window === 'object' ? qs.parse(window.location.search.substr(1)) : {});
