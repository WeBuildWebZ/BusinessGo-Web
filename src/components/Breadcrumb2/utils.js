export const getItems = (arr, path) => {
  const matchingItem = arr.find(item => item.regex.test(path));

  if (!matchingItem) throw new Error(`Path not matching for breadcrumb:${path}`);

  return matchingItem.items;
};
