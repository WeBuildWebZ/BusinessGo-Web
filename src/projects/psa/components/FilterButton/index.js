import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FilterButton = props => {
  const handleClick = () => {
    props.onOpenFilterView();
  };

  return (
    <div className="SearchInput-FilterButton" onClick={handleClick}>
      <img src="icons/filter.svg" alt="filterIcon" />
      <style jsx>
        {`
          .SearchInput-FilterButton {
            display: none;
            float: left;
            border-style: solid;
            border-width: 2px;
            border-radius: 5px;
            border-color: #ffffff;
            margin-left: 8px;
            width: 11%;
            cursor: pointer;
          }

          @media only screen and (max-width: 768px) {
            .SearchInput-FilterButton {
              display: block;
            }
          }
        `}
      </style>
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
