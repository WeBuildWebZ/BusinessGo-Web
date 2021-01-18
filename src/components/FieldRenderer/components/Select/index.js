import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FormControl, InputLabel, MenuItem, Select as SelectInput } from '@material-ui/core';
import PropTypes from 'prop-types';

import { fieldShape } from '../../../../utils/field';

import { getLanguage } from './lang';

const Select = props => {
  const { field, value } = props;
  const language = getLanguage(useSelector(store => store.language));
  const project = useSelector(store => store.project);
  const [stateValue, setStateValue] = useState(value || field.default_value);

  const handleChangeValue = ({ target }) => {
    setStateValue(target.value);
    props.onChange(target.value);
  };

  return (
    <FormControl>
      <InputLabel>{field.name}</InputLabel>
      <SelectInput
        label={field.name}
        value={stateValue}
        onChange={handleChangeValue}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label', style: { width: '100%' } }}
        style={{ padding: 5, margin: '16px 0 16px 0' }}
        disabled={props.readOnly}
      >
        <MenuItem key={-1} value="" disabled>
          {`${language.select} ${field.name}`}
        </MenuItem>
        {project.configuration[field.options_reference.form_code][field.options_reference.field_key].map(
          (option, i) => (
            <MenuItem key={i} value={option.value}>
              {option.value}
            </MenuItem>
          )
        )}
      </SelectInput>
    </FormControl>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  field: fieldShape.isRequired,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func
};

Select.defaultProps = {
  value: '',
  readOnly: false,
  onChange: () => {}
};

export default Select;
