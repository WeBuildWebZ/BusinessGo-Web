import PropTypes from 'prop-types';

const Button = props => (
  <div className="button">
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
        }
      `}
    </style>
  </div>
);

Button.propTypes = {
  text: PropTypes.string.isRequired
};

export default Button;
