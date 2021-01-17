import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const timeout = 300;
let timeoutId;

const SearchInput = props => {
  const handleChange = ({ target }) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      props.onChange(target.value);
    }, timeout);
  };

  return (
    <TextField
      label="Buscar"
      variant="outlined"
      size="small"
      onChange={handleChange}
      style={{ marginBottom: 10, width: '80%' }}
    />
  );
};

SearchInput.propTypes = {
  onChange: PropTypes.func
};

SearchInput.defaultProps = {
  onChange: () => {}
};

export default SearchInput;
