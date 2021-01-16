import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FormLabel, TextField, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

import { fieldShape } from '../../../../utils/field';

import { getLanguage } from './lang';
import { eachExistingValue } from './utils';

const Text = props => {
  const { field, value } = props;
  const language = getLanguage(useSelector(store => store.language));
  const [stateValue, setStateValue] = useState(value || field.default_value);

  const handleChangeValue = (index, valueToChange) => {
    if (!valueToChange) return;

    const newValue = stateValue.map((currentValue, i) => (i === index ? valueToChange : currentValue));

    setStateValue(newValue);
    props.onChange(eachExistingValue(newValue));
  };

  const handleAddValue = () => {
    setStateValue([...stateValue, '']);
  };

  const handleRemoveValue = indexToRemove => {
    const newValue = stateValue.filter((currentValue, i) => i !== indexToRemove);

    setStateValue(newValue);

    if (!stateValue[indexToRemove]) return;

    props.onChange(eachExistingValue(newValue));
  };

  return (
    <div className="inputGroup">
      <>
        <FormLabel component="legend">{field.name}</FormLabel>
        {stateValue.map((currentValue, i) => (
          <TextField
            key={i}
            label={`${field.enum_name} ${i + 1}`}
            value={currentValue}
            variant="outlined"
            required={field.is_required}
            style={{ width: '100%', margin: '16px 0 5px 0', display: 'inline-block' }}
            size="small"
            onChange={({ target }) => handleChangeValue(i, target.value)}
            InputProps={{
              endAdornment: <CloseIcon style={{ cursor: 'pointer' }} onClick={() => handleRemoveValue(i)} />
            }}
          />
        ))}
        <Button onClick={handleAddValue} style={{ marginTop: 8 }}>
          {language.add} {field.enum_name}
        </Button>
      </>
      <style jsx>
        {`
          .inputGroup {
            width: 100%;
            margin: 20px 0 20px 0;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 0 3px 1px rgba(128, 128, 128, 0.633);
          }
        `}
      </style>
    </div>
  );
};

Text.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  field: fieldShape.isRequired,
  onChange: PropTypes.func
};

Text.defaultProps = {
  value: [],
  onChange: () => {}
};

export default Text;
