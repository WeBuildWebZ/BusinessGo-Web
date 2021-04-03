import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { fieldShape } from '../../../utils/field';
import { getFieldKeyTranslation } from '../../../translations/fieldKeys';

const Number = props => {
  const { field, value } = props;
  const languageCode = useSelector(store => store.language);
  const keyTranslation = getFieldKeyTranslation(languageCode);
  const [stateValue, setStateValue] = useState(value || field.default_value);

  const handleChangeValue = ({ target }) => {
    setStateValue(+target.value);
    props.onChange(+target.value);
  };

  return (
    <TextField
      label={(field.names && field.names[languageCode]) || field.name || keyTranslation[field.key]}
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
