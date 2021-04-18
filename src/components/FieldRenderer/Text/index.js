import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { fieldShape } from '../../../utils/field';
import { getFieldKeyTranslation } from '../../../translations/fieldKeys';

const Text = props => {
  const { field, value } = props;
  const languageCode = useSelector(store => store.language);
  const keyTranslation = getFieldKeyTranslation(languageCode);
  const [stateValue, setStateValue] = useState(value || field.default_value);
  const label = (field.names && field.names[languageCode]) || field.name || keyTranslation[field.key];

  const handleChangeValue = ({ target }) => {
    setStateValue(target.value);
    props.onChange(target.value);
  };

  switch (props.template) {
    case 'default': {
      return (
        <TextField
          label={label}
          value={stateValue || ''}
          disabled={props.readOnly}
          rows={props.rows}
          multiline={props.multiline}
          variant="outlined"
          required={field.is_required}
          style={{ width: '100%', margin: '16px 0 16px 0' }}
          size="small"
          onChange={handleChangeValue}
        />
      );
    }
    default: {
      throw new Error(`Unknown template ${props.template}`);
    }
  }
};

Text.propTypes = {
  template: PropTypes.string.isRequired,
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
