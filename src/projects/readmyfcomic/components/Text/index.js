import PropTypes from 'prop-types';
import { useState } from 'react';

import useUpdateAfter from '../../../../shared/hooks/useUpdateAfter';

const Text = props => {
  const updateAfter = useUpdateAfter();

  const handleChange = e => {
    updateAfter(e.target.value, 400, _value => {
      props.onChange(_value);
    });
  };

  return (
    <div className="text">
      <h3 className="title">{props.title}</h3>
      {props.large ? (
        <textarea className="input textAreaInput" onChange={handleChange} placeholder={props.placeholder} />
      ) : (
        <input
          className="input textInput"
          type="text"
          onChange={handleChange}
          placeholder={props.placeholder}
        />
      )}
      <style jsx>
        {`
          .text {
          }
          .input {
            width: 100%;
            padding: 3px;
            outline: none;
            border-width: 1px;
            border-color: #dcb3e1;
            background-color: #ffcfb599;
            transition: 0.1s;
          }
          .input:focus {
            border-width: 2px;
            border-radius: 5px;
            border-color: #b888be;
            background-color: #ffcfb5;
            box-shadow: 0 0 1px 1px #b888be;
          }
          .textAreaInput {
            height: 250px;
            outline: none;
          }
        `}
      </style>
    </div>
  );
};

Text.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  large: PropTypes.bool,
  onChange: PropTypes.func
};

Text.defaultProps = {
  large: false,
  onChange: () => {}
};

export default Text;
