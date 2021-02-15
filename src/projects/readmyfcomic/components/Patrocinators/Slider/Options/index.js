import PropTypes from 'prop-types';
import { useState } from 'react';

const Options = props => {
  const handleSelectOption = option => {
    props.onChange(option);
  };

  return (
    <div className="options">
      {new Array(props.length).fill(0).map((option, i) => {
        const isSelected = props.option === i;
        return (
          <div
            key={i}
            className={`option${isSelected ? ' selectedOption' : ''}`}
            onClick={() => handleSelectOption(i)}
          />
        );
      })}
      <style jsx>
        {`
          .options {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;
          }
          .option {
            width: 15px;
            height: 15px;
            margin: 12px;
            border-radius: 50px;
            background-color: #303030;
            transition: 0.7s;
            cursor: pointer;
          }
          .selectedOption {
            transform: scale(1.12) translate(0, -12%);
            box-shadow: 5px 5px 15px #303030;
          }
        `}
      </style>
    </div>
  );
};

Options.propTypes = {
  option: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  onChange: PropTypes.func
};

Options.defaultProps = {
  onChange: () => {}
};

export default Options;
