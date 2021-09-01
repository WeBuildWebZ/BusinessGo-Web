import PropTypes from 'prop-types';

export const fieldShape = PropTypes.shape({
  key: PropTypes.string.isRequired,
  name: PropTypes.string,
  default_value: PropTypes.number,
  important: PropTypes.bool.isRequired,
  input_type: PropTypes.string.isRequired, // text | number | photo | email | phone
  is_required: PropTypes.bool.isRequired
});

export const getFieldOptions = (project, field) =>
  (field.options?.length && field.options) ||
  project.configuration[field.options_reference.form_code][field.options_reference.field_key] ||
  [];

export const getFieldOption = (project, field, value) => {
  const options = getFieldOptions(project, field);

  return options.find(option => option.key === value);
};
