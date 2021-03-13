export const getDataFromFields = (fields, data) =>
  Object.fromEntries(fields.map(field => [field.key, data[field.key]]));
