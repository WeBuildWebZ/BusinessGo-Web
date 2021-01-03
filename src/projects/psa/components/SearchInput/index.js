import React from 'react';
import PropTypes from 'prop-types';

import Search from './search.svg';
import './style.css';
import './responsive.css';

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
    <div className="SearchInput">
      <Search className="SearchInput-icon" />
      <div className="SearchInput-inputContainer">
        <input
          type="text"
          className="SearchInput-input SearchInput-inputSmall"
          placeholder="Buscar por nombre o dirección"
          onChange={handleChange}
        />
        <input
          type="text"
          className="SearchInput-input SearchInput-inputLarge"
          placeholder="Buscar por nombre de profesional, taller o dirección"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

SearchInput.propTypes = {
  onChange: PropTypes.func
};

SearchInput.defaultProps = {
  onChange: () => {}
};

export default SearchInput;
