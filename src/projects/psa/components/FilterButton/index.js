import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FilterIcon from './filter.svg';
import './style.css';
import './responsive.css';

const FilterButton = props => {
  const handleClick = () => {
    props.onOpenFilterView();
  };

  return (
    <div className="SearchInput-FilterButton" onClick={handleClick}>
      <FilterIcon />
    </div>
  );
};

FilterButton.propTypes = {
  onOpenFilterView: PropTypes.func
};

FilterButton.defaultProps = {
  onOpenFilterView: () => {}
};

export default FilterButton;
