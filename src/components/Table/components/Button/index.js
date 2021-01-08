import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const className = `button${props.selected ? ' button-selected' : ''}`;

  return (
    <div className={className} onClick={props.onClick}>
      {props.text}
      <style jsx>
        {`
          .button {
            width: 100%;
            padding: 0 4px;
            border-radius: 0.5em;
            background: white;
            text-align: center;
            transition: 0.1s;
            user-select: none;
          }
        `}
      </style>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  selected: false,
  onClick: () => {}
};

export default Button;
