import PropTypes from 'prop-types';

const ButtonContainer = props => (
  <div className="button" onClick={props.onClick}>
    {props.icon && <img src={props.icon} className="icon" />}
    <style jsx>
      {`
        .button {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #ffffff;
          box-shadow: 0 0 2px 2px #ffffff;
          border-radius: 5px;
          cursor: pointer;
          user-select: none;
          transition: 0.2s;
        }
        .button:hover {
          border-radius: 8px;
          box-shadow: 0 0 3px 3px #ffffff;
          transform: rotate(15deg);
        }
        .icon {
          position: absolute;
          transform: translate(-50%, -50%);
          left: 50%;
          top: 50%;
          width: 60%;
        }
      `}
    </style>
  </div>
);

ButtonContainer.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func
};

ButtonContainer.defaultProps = {
  icon: '',
  onClick: () => {}
};

export default ButtonContainer;
