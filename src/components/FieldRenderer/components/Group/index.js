import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FormLabel, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

import { fieldShape } from '../../../../utils/field';
import InputGroup from '../../../InputGroup';

import FieldModal from './components/FieldModal';
import { getLanguage } from './lang';

const Group = props => {
  const { field, value } = props;
  const language = getLanguage(useSelector(store => store.language));
  const [stateValue, setStateValue] = useState(value || field.default_value);
  const [enumModalOption, setEnumModalOption] = useState(null);
  const [enumModalOptionIndex, setEnumModalOptionIndex] = useState(null);

  const handleAddValue = () => {
    setStateValue([...stateValue, {}]);
  };

  const handleRemoveValue = indexToRemove => {
    const newValue = stateValue.filter((_, i) => i !== indexToRemove);

    setStateValue(newValue);

    props.onChange(newValue);
  };

  const handleUpdateEnum = newData => {
    setEnumModalOption(null);
    const newValue = stateValue.map((option, i) => (i === enumModalOptionIndex ? newData : option));

    setStateValue(newValue);
    props.onChange(newValue);
  };

  const handleOpenEnumModal = (index, option) => {
    setEnumModalOption(option);
    setEnumModalOptionIndex(index);
  };

  return (
    <InputGroup>
      {enumModalOption && (
        <FieldModal
          field={field}
          data={enumModalOption}
          FieldRenderer={props.FieldRenderer}
          onClose={() => setEnumModalOption(null)}
          onChange={handleUpdateEnum}
        />
      )}
      <FormLabel component="legend">{field.name}</FormLabel>
      {stateValue.map((option, i) => (
        <>
          <Button
            key={i}
            variant="outlined"
            required={field.is_required}
            style={{ width: '75%', margin: '16px 0 5px 0', display: 'inline-block' }}
            size="small"
            onClick={() => handleOpenEnumModal(i, option)}
          >
            {`${field.enum_name} ${i + 1}`}
          </Button>
          <CloseIcon
            style={{ cursor: 'pointer', display: 'inline-block' }}
            onClick={() => handleRemoveValue(i)}
          />
        </>
      ))}
      {!props.readOnly && (
        <Button onClick={handleAddValue} style={{ marginTop: 8 }}>
          {language.add} {field.enum_name}
        </Button>
      )}
    </InputGroup>
  );
};

Group.propTypes = {
  value: PropTypes.arrayOf(PropTypes.object),
  field: fieldShape.isRequired,
  readOnly: PropTypes.bool,
  FieldRenderer: PropTypes.any.isRequired,
  onChange: PropTypes.func
};

Group.defaultProps = {
  value: [],
  readOnly: false,
  onChange: () => {}
};

export default Group;
