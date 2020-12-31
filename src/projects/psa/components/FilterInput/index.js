import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';

import Select from './components/select';
import Options from './components/options';
import './style.css';

const FilterInput = props => {
  let cancel = false;
  const [open, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleClick = e => {
    e.preventDefault();
    if (!cancel) setOpen(!open);
  };

  const handleChangeSelectedOptions = newSelectedOptions => {
    setSelectedOptions(newSelectedOptions);
    props.onChange(newSelectedOptions);
  };

  const handleRemoveFilter = e => {
    cancel = true;
    setSelectedOptions([]);
    props.onChange([]);
  };

  return (
    <div className="FilterInput" onClick={handleClick}>
      {props.loading && <Spinner animation="grow" className="FilterInput-spinner" />}
      <Select
        onClick={handleClick}
        onClickCross={handleRemoveFilter}
        selectedOptions={selectedOptions}
        label={props.label}
      />
      {open && (
        <Options
          options={props.options}
          selectedOptions={selectedOptions}
          onChange={handleChangeSelectedOptions}
        />
      )}
    </div>
  );
};

FilterInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

FilterInput.defaultProps = {
  options: [],
  onChange: () => {}
};

export default FilterInput;
