import PropTypes from 'prop-types';

const Button = props => {
  const handleClick = () => {
    if (props.disabled) return;
    props.onClick();
  };

  return (
    <div className="buttonContainer" onClick={handleClick}>
      <div className={`button${props.disabled ? ' disabled' : ''}`}>
        {props.text}
        <i className="fa fa-check" />
      </div>
      <style jsx>
        {`
          .buttonContainer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            transition: 0;
          }
          .button {
            width: fit-content;
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: #f8c49c;
            padding: 7px;
            border-style: solid;
            border-width: 1px;
            border-radius: 7px;
            user-select: none;
            cursor: pointer;
            transition: 0.7s;
          }
          .button:hover {
            transform: scale(1.1);
          }
          .button:active {
            transform: scale(1.2);
            transition: 0.1s;
          }
          .button.disabled {
            transform: scale(0.9);
            opacity: 0.5;
            cursor: unset;
            filter: blur(1px);
            transition: 0.1s;
          }
          .fa-check {
            margin-left: 7px;
            color: #08ac24;
          }
        `}
      </style>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  disabled: false,
  onClick: () => {}
};

export default Button;
