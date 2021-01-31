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

  const options =
    field.options ||
    project.configuration[field.options_reference.form_code][field.options_reference.field_key] ||
    [];
  const optionFields = options.find(option => option.key === value)?.fields;

  const handleChangeValue = ({ target }) => {
    props.onChange(target.value);
  };

  const handleChangeData = newData => {
    props.onChangeOptionData(newData);
  };

  return (
    <>
      <FormControl>
        <InputLabel>{field.name}</InputLabel>
        <SelectInput
          label={field.name}
          value={value || 'select_a_value'}
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
            <MenuItem key={option.key || i} value={option.key}>
              {option.value}
            </MenuItem>
          ))}
        </SelectInput>
      </FormControl>
      {optionFields && (
        <FieldRenderer fields={optionFields} data={props.optionData} onChange={handleChangeData} />
      )}
    </>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  field: fieldShape.isRequired,
  optionData: PropTypes.object,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  onChangeOptionData: PropTypes.func,
  FieldRenderer: PropTypes.any.isRequired
};

Select.defaultProps = {
  value: '',
  optionData: {},
  readOnly: false,
  onChange: () => {},
  onChangeOptionData: () => {}
};

export default Select;
