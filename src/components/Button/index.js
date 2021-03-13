import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const className = `button${props.selected ? ' button-selected' : ''}`;

  return (
    <div className={className} onClick={props.onClick} style={props.style}>
      {props.text}
      <style jsx>
        {`
          .button {
            float: left;
            width: 100%;
            padding: 5px 0;
            text-align: center;
            transition: 0.2s;
            cursor: pointer;
            background-color: rgba(65, 63, 63, 0.2);
            font-size: 14px;
            user-select: none;
          }

          .button:hover {
            border-radius: 5px;
            background-color: rgba(0, 0, 0, 0.2);
          }

          .button-selected {
            box-shadow: 0 0 1px 1px darkcyan;
          }
        `}
      </style>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func
};

Button.defaultProps = {
  selected: false,
  style: {},
  onClick: () => {}
};

export default Button;
