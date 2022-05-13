export const getAssetUrl = (path, isShared) =>
  `https://assets.webuildwebz.com/${encodeURIComponent(process.env.PROJECT_CODE)}/${path}`;
