export const getQueryParam = key => new URLSearchParams(window.location.search).get(key);
