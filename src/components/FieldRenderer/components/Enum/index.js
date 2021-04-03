import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FormLabel, TextField, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ListIcon from '@material-ui/icons/List';
import PropTypes from 'prop-types';

import { fieldShape } from '../../../../utils/field';
import InputGroup from '../../../InputGroup';
import { getFieldKeyTranslation } from '../../../../translations/fieldKeys';

import EnumModal from './components/EnumModal';
import { getLanguage } from './lang';
import { eachExistingValue } from './utils';

const Enum = props => {
  const { field, value } = props;
  const languageCode = useSelector(store => store.language);
  const keyTranslation = getFieldKeyTranslation(languageCode);
  const language = getLanguage(languageCode);
  const [stateValue, setStateValue] = useState(value || field.default_value);
  const [enumModalOption, setEnumModalOption] = useState(null);
  const [enumModalOptionIndex, setEnumModalOptionIndex] = useState(null);

  const handleChangeValue = (index, option, valueToChange) => {
    if (!valueToChange) return;

    const newValue = stateValue.map((currentValue, i) =>
      i === index ? { ...option, value: valueToChange } : currentValue
    );

    setStateValue(newValue);
    props.onChange(eachExistingValue(newValue));
  };

  const handleAddValue = () => {
    setStateValue([...stateValue, { value: '', related_values: {} }]);
  };

  const handleRemoveValue = indexToRemove => {
    const newValue = stateValue.filter((_, i) => i !== indexToRemove);

    setStateValue(newValue);

    if (!stateValue[indexToRemove]) return;

    props.onChange(eachExistingValue(newValue));
  };

  const handleUpdateEnum = newData => {
    setEnumModalOption(null);
    const newValue = stateValue.map((option, i) =>
      i === enumModalOptionIndex ? { ...option, related_values: newData } : option
    );

    setStateValue(newValue);
    props.onChange(eachExistingValue(newValue));
  };

  const handleOpenEnumModal = (index, option) => {
    setEnumModalOption(option);
    setEnumModalOptionIndex(index);
  };

  return (
    <InputGroup>
      {enumModalOption && (
        <EnumModal
          field={field}
          option={enumModalOption}
          FieldRenderer={props.FieldRenderer}
          onClose={() => setEnumModalOption(null)}
          onChange={handleUpdateEnum}
        />
      )}
      <FormLabel component="legend">
        {(field.names && field.names[languageCode]) || field.name || keyTranslation[field.key]}
      </FormLabel>
      {stateValue.map((option, i) => (
        <TextField
          key={i}
          label={`${field.enum_name} ${i + 1}`}
          value={option.value}
          variant="outlined"
          required={field.is_required}
          style={{ width: '100%', margin: '16px 0 5px 0', display: 'inline-block' }}
          size="small"
          onChange={({ target }) => handleChangeValue(i, option, target.value)}
          InputProps={{
            style: { width: '90%' },
            endAdornment: !props.readOnly && (
              <>
                <ListIcon
                  style={{ cursor: 'pointer', marginRight: 10 }}
                  onClick={() => handleOpenEnumModal(i, option)}
                />
                <CloseIcon style={{ cursor: 'pointer' }} onClick={() => handleRemoveValue(i)} />
              </>
            )
          }}
        />
      ))}
      {!props.readOnly && (
        <Button onClick={handleAddValue} style={{ marginTop: 8 }}>
          {language.add} {field.enum_name}
        </Button>
      )}
    </InputGroup>
  );
};

Enum.propTypes = {
  value: PropTypes.arrayOf(PropTypes.object),
  field: fieldShape.isRequired,
  readOnly: PropTypes.bool,
  FieldRenderer: PropTypes.any.isRequired,
  onChange: PropTypes.func
};

Enum.defaultProps = {
  value: [],
  readOnly: false,
  onChange: () => {}
};

export default Enum;
