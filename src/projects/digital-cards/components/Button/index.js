import PropTypes from 'prop-types';

const Button = props => (
  <div className="button" style={props.style} onClick={props.onClick}>
    {props.text}
    <style jsx>
      {`
        .button {
          width: fit-content;
          padding: 7px 21px 7px 21px;
          border-radius: 7px;
          transition: 0.7s;
          user-select: none;
          cursor: pointer;
        }
        .button:hover {
          transform: scale(1.1);
        }
        .button:active {
          transform: scale(1.2);
          transition: 0.1s;
        }
      `}
    </style>
  </div>
);

Button.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
};

Button.defaultProps = {
  text: '',
  style: {},
  onClick: () => {}
};

export default Button;
