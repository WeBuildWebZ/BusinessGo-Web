import React from 'react';
import PropTypes from 'prop-types';

import ArrowDown from './arrow-down.svg';
import Close from './close.svg';
import './style.css';

const Select = props => (
  <>
    {!!props.selectedOptions.length && (
      <>
        <Close className="FilterInputSelect-cross" onClick={props.onClickCross} />
        <div className="FilterInputSelect-badge">{props.selectedOptions.length}</div>
      </>
    )}
    <span className="FilterInputSelect" onClick={props.onClick}>
      {props.label}
    </span>
    <ArrowDown className="FilterInputSelect-arrowDown" onClick={props.onClick} />
  </>
);

Select.propTypes = {
  onClick: PropTypes.func,
  onClickCross: PropTypes.func,
  label: PropTypes.string.isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.string)
};

Select.defaultProps = {
  onClick: () => {},
  onClickCross: () => {},
  selectedOptions: []
};

export default Select;
