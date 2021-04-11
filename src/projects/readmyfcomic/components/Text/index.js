import PropTypes from 'prop-types';
import { useState } from 'react';

const Text = props => {
  const [value, setValue] = useState('');

  return (
    <div className="text">
      <h3 className="title">{props.title}</h3>
      {props.large ? (
        <textarea
          className="input textAreaInput"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={props.placeholder}
        />
      ) : (
        <input
          className="input textInput"
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
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
            border-color: #030303;
          }
          .textAreaInput {
          }
        `}
      </style>
    </div>
  );
};

Text.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  large: PropTypes.bool
};

Text.defaultProps = {
  large: false
};

export default Text;
