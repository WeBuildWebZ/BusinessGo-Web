import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import PropTypes from 'prop-types';

const Options = props => {
  const handleChange = (option, isChecked) => {
    const index = props.selectedOptions.indexOf(option);
    let newSelectedOptions;

    if (isChecked)
      newSelectedOptions = [
        ...props.selectedOptions.slice(0, index),
        ...props.selectedOptions.slice(index + 1, props.selectedOptions.length)
      ];
    else newSelectedOptions = props.selectedOptions.concat(option);

    props.onChange(newSelectedOptions);
  };

  return (
    <>
      <div className="FilterInputSelectOptions-overlay" />
      <div className="FilterInputSelectOptions">
        {props.options.map((option, i) => {
          const isChecked = props.selectedOptions.includes(option);

          return (
            <div
              key={i}
              className="FilterInputSelectOptions-container"
              onClick={() => handleChange(option, isChecked)}
            >
              <FormControlLabel
                key={i}
                className="FilterInputSelectOptions-control"
                label={option}
                control={
                  <Checkbox
                    className="FilterInputSelectOptions-controlCheckbox"
                    checked={isChecked}
                    style={{ color: isChecked ? '#26C95E' : '#7A869A' }}
                    inputProps={{
                      'aria-label': 'primary checkbox'
                    }}
                  />
                }
              />
            </div>
          );
        })}
      </div>
      <style jsx global>
        {`
          .FilterInputSelectOptions {
            position: absolute;
            min-width: 300px;
            margin-top: 20px;
            background-color: #ffffff;
            border-radius: 4px;
            z-index: 2;
          }

          .FilterInputSelectOptions-overlay {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background-color: rgba(32, 34, 33, 0.2);
          }

          .FilterInputSelectOptions-container {
            margin-left: 22px;
          }

          .FilterInputSelectOptions-control {
            width: 100%;
            margin-top: 3px;
            left: 22px;
            color: #7a869a;
          }

          .FilterInputSelectOptions-controlCheckbox {
            float: left;
          }

          .FilterInputSelectOptions-controlCheckbox:checked {
            color: #0cc44a;
          }
        `}
      </style>
    </>
  );
};

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  selectedOptions: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func
};

Options.defaultProps = {
  options: [],
  selectedOptions: [],
  onChange: () => {}
};

export default Options;
