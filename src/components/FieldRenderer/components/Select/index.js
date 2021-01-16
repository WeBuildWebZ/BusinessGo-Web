import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import PropTypes from 'prop-types';

import { fieldShape } from '../../../../utils/field';

import { getLanguage } from './lang';

const Text = props => {
  const { field, value } = props;
  const language = getLanguage(useSelector(store => store.language));
  const project = useSelector(store => store.project);
  const [stateValue, setStateValue] = useState(value || field.default_value);

  const handleChangeValue = ({ target }) => {
    setStateValue(target.value);
    props.onChange(target.value);
  };

  return (
    <>
      <FormControl>
        <InputLabel>{field.name}</InputLabel>
        <Select
          label={field.name}
          value={stateValue}
          onChange={handleChangeValue}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label', style: { width: '100%' } }}
          style={{ padding: 5, margin: '16px 0 16px 0' }}
        >
          <MenuItem value="" disabled>
            {`${language.select} ${field.name}`}
          </MenuItem>
          {project.configuration[field.options_reference.form_code][field.options_reference.field_key].map(
            currentValue => (
              <MenuItem value={currentValue}>{currentValue}</MenuItem>
            )
          )}
        </Select>
      </FormControl>
    </>
  );
};

Text.propTypes = {
  value: PropTypes.string,
  field: fieldShape.isRequired,
  onChange: PropTypes.func
};

Text.defaultProps = {
  value: '',
  onChange: () => {}
};

export default Text;
