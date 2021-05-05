export const getDataFromFields = (fields, data) =>
  Object.fromEntries(
    fields.filter(field => data[field.key] !== undefined).map(field => [field.key, data[field.key]])
  );

export const getNewConfiguration = (configuration, changedConfiguration, formCode) => ({
  ...configuration,
  [formCode]: {
    ...(configuration[formCode] || {}),
    ...changedConfiguration
  }
});

const Component = () => <div />;

export default Component;
