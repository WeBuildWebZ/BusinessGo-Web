import React from 'react';
import PropTypes from 'prop-types';

const Select = props => (
  <>
    {!!props.selectedOptions.length && (
      <>
        <img
          className="FilterInputSelect-cross"
          src="icons/close.svg"
          alt="closeIcon"
          onClick={props.onClickCross}
        />
        <div className="FilterInputSelect-badge">{props.selectedOptions.length}</div>
      </>
    )}
    <span className="FilterInputSelect" onClick={props.onClick}>
      {props.label}
    </span>
    <img
      className="FilterInputSelect-arrowDown"
      src="icons/arrow-down.svg"
      alt="arrowDownIcon"
      onClick={props.onClick}
    />
    <style jsx>
      {`
        .FilterInputSelect {
          position: relative;
          top: 4px;
          margin: 0 12px 0 12px;
          background-color: transparent;
          border-style: none;
          color: #ffffff;
          cursor: pointer;
          font-size: 15px;
          user-select: none;
        }

        .FilterInputSelect-arrowDown {
          position: relative;
          top: 4px;
          margin-right: 10px;
          cursor: pointer;
          user-select: none;
        }

        .FilterInputSelect-cross {
          position: relative;
          width: 11px;
          left: 18px;
          top: 5px;
          margin-right: 20px;
          cursor: pointer;
          user-select: none;
        }

        .FilterInputSelect-badge {
          display: inline-block;
          position: relative;
          top: 2px;
          width: 22px;
          height: 22px;
          font-size: 15px;
          font-weight: 900;
          text-align: center;
          border-radius: 50px;
          background-color: #0cc44a;
          margin: 0 0 0 10px;
          user-select: none;
          align-items: center;
        }
      `}
    </style>
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
