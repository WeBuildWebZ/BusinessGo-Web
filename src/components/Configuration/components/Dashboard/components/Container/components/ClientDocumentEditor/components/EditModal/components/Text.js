import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

const Text = props => {
  const { field, value } = props;

  return (
    <>
      <TextField
        label={field.name}
        defaultValue={value}
        variant="outlined"
        required={field.is_required}
        style={{ width: '100%', margin: '16px 0 16px 0' }}
        size="small"
        onChange={({ target }) => props.onChange(target.value)}
      />
    </>
  );
};

Text.propTypes = {
  value: PropTypes.string,
  field: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    important: PropTypes.bool.isRequired,
    input_type: PropTypes.string.isRequired, // text | number | photo | email | phone
    is_required: PropTypes.bool.isRequired
  }).isRequired,
  onChange: PropTypes.func
};

Text.defaultProps = {
  value: '',
  onChange: () => {}
};

export default Text;
