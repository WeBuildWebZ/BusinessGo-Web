import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

import { fieldShape } from '../../../utils/field';

const Number = props => {
  const { field, value } = props;

  return (
    <>
      <TextField
        label={field.name}
        defaultValue={value}
        type="number"
        variant="outlined"
        disabled={props.readOnly}
        required={field.is_required}
        style={{ width: '100%', margin: '16px 0 16px 0' }}
        size="small"
        onChange={({ target }) => props.onChange(target.value)}
      />
    </>
  );
};

Number.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  readOnly: PropTypes.bool,
  field: fieldShape.isRequired,
  onChange: PropTypes.func
};

Number.defaultProps = {
  value: '',
  readOnly: false,
  onChange: () => {}
};

export default Number;
