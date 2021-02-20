import PropTypes from 'prop-types';

import * as constants from '../constants';

const FAQButton = props => (
  <div className={`button${!props.show ? ' buttonHidden' : ''}`} onClick={props.onClick}>
    {props.text}
    <style jsx>
      {`
        .button {
          position: fixed;
          transform: translate(-100%, -100%);
          left: calc(100% - 50px - ${constants.WIDTH}px - 5px);
          top: calc(100% - 23px);
          width: fit-content;
          height: fit-content;
          padding: 10px;
          text-align: center;
          background-color: lightskyblue;
          border-radius: 7px;
          cursor: pointer;
          transition: 0.7s;
          z-index: 1000;
          user-select: none;
          box-shadow: 0 5px 10px lightskyblue;
        }
        .button:hover {
          box-shadow: 0 5px 50px lightskyblue;
          transform: translate(-100%, -100%) scale(1.1);
        }
        .buttonHidden {
          transform: translate(0, 0) scale(0);
          opacity: 0;
        }
      `}
    </style>
  </div>
);

FAQButton.propTypes = {
  text: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

FAQButton.defaultProps = {
  onClick: () => {}
};

export default FAQButton;
