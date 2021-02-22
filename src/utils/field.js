import PropTypes from 'prop-types';

export const fieldShape = PropTypes.shape({
  key: PropTypes.string.isRequired,
  name: PropTypes.string,
  default_value: PropTypes.number,
  important: PropTypes.bool.isRequired,
  input_type: PropTypes.string.isRequired, // text | number | photo | email | phone
  is_required: PropTypes.bool.isRequired
});
