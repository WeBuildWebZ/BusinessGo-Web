import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

import { fieldShape } from '../../../utils/field';

const Text = props => {
  const { field, value } = props;
  const [stateValue, setStateValue] = useState(value || field.default_value);

  const handleChangeValue = ({ target }) => {
    setStateValue(target.value);
    props.onChange(target.value);
  };

  return (
    <>
      <TextField
        label={field.name}
        value={stateValue}
        disabled={props.readOnly}
        rows={props.rows}
        multiline={props.multiline}
        variant="outlined"
        required={field.is_required}
        style={{ width: '100%', margin: '16px 0 16px 0' }}
        size="small"
        onChange={handleChangeValue}
      />
    </>
  );
};

Text.propTypes = {
  value: PropTypes.string,
  multiline: PropTypes.bool,
  readOnly: PropTypes.bool,
  rows: PropTypes.number,
  field: fieldShape.isRequired,
  onChange: PropTypes.func
};

Text.defaultProps = {
  value: '',
  multiline: false,
  readOnly: false,
  rows: 1,
  onChange: () => {}
};

export default Text;
