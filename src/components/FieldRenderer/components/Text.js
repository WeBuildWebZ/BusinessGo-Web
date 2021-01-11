import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

import { fieldShape } from '../../../utils/field';

const Text = props => {
  const { field, value } = props;

  return (
    <>
      <TextField
        label={field.name}
        defaultValue={value || field.default_value}
        rows={props.rows}
        multiline={props.multiline}
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
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  field: fieldShape.isRequired,
  onChange: PropTypes.func
};

Text.defaultProps = {
  value: '',
  multiline: false,
  rows: 1,
  onChange: () => {}
};

export default Text;
