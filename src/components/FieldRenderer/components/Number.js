import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

import { fieldShape } from '../../../utils/field';

const Number = props => {
  const { field, value } = props;
  const [stateValue, setStateValue] = useState(value || field.default_value);

  const handleChangeValue = ({ target }) => {
    setStateValue(+target.value);
    props.onChange(+target.value);
  };

  return (
    <TextField
      label={field.name}
      value={stateValue}
      type="number"
      variant="outlined"
      disabled={props.readOnly}
      required={field.is_required}
      style={{ width: '100%', margin: '16px 0 16px 0' }}
      size="small"
      onChange={handleChangeValue}
    />
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
