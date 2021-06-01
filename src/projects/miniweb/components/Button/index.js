import PropTypes from 'prop-types';

const Button = props => {
  const handleClick = () => {
    if (props.disabled) return;

    props.onClick();
  };

  return (
    <div
      className={`button${props.disabled ? ' disabled' : ' enabled'}`}
      style={props.style}
      onClick={handleClick}
    >
      {props.text}
      <style jsx>
        {`
          .button {
            width: fit-content;
            padding: 7px 21px 7px 21px;
            border-radius: 7px;
            transition: 0.7s;
            user-select: none;
          }
          .button.enabled {
            cursor: pointer;
          }
          .button.disabled {
            opacity: 0.5;
          }
          .button.enabled:hover {
            transform: scale(1.1);
          }
          .button.enabled:active {
            transform: scale(1.2);
            transition: 0.1s;
          }
        `}
      </style>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  text: '',
  style: {},
  disabled: false,
  onClick: () => {}
};

export default Button;
