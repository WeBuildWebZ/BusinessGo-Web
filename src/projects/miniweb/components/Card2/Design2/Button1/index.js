import PropTypes from 'prop-types';

const Button = props => (
  <div className="button" onClick={props.onClick}>
    {props.text}
    <style jsx>
      {`
        .button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 59.5%;
          margin-bottom: 14px;
          color: whitesmoke;
          background-color: #bbbbbb88;
          border-color: #bbbbbb55;
          border-style: solid;
          border-width: 7px;
          border-radius: 50px;
          font-weight: bold;
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
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: () => {}
};

export default Button;
