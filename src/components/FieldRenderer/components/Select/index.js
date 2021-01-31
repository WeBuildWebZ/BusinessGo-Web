import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FormControl, InputLabel, MenuItem, Select as SelectInput } from '@material-ui/core';
import PropTypes from 'prop-types';

import { fieldShape } from '../../../../utils/field';

import { getLanguage } from './lang';

const Select = props => {
  const { field, value, FieldRenderer } = props;
  const language = getLanguage(useSelector(store => store.language));
  const project = useSelector(store => store.project);
  const [stateValue, setStateValue] = useState(value || field.default_value);
  const [optionData, setOptionData] = useState({});

  const options =
    field.options ||
    project.configuration[field.options_reference.form_code][field.options_reference.field_key] ||
    [];
  const optionFields = options.find(option => option.value === stateValue)?.fields;

  const handleChangeValue = ({ target }) => {
    setStateValue(target.value);
    props.onChange(target.value);
  };

  return (
    <>
      <FormControl>
        <InputLabel>{field.name}</InputLabel>
        <SelectInput
          label={field.name}
          value={stateValue || 'select_a_value'}
          onChange={handleChangeValue}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label', style: { width: '100%' } }}
          style={{ padding: 5, margin: '16px 0 16px 0' }}
          disabled={props.readOnly}
        >
          <MenuItem key={-1} value="select_a_value" disabled>
            {`${language.select} ${field.name}`}
          </MenuItem>
          {options.map((option, i) => (
            <MenuItem key={option.key || i} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </SelectInput>
      </FormControl>
      {optionFields && <FieldRenderer fields={optionFields} data={optionData} onChange={setOptionData} />}
    </>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  field: fieldShape.isRequired,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  FieldRenderer: PropTypes.any.isRequired
};

Select.defaultProps = {
  value: '',
  readOnly: false,
  onChange: () => {}
};

export default Select;
