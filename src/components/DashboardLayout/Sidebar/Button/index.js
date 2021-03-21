import PropTypes from 'prop-types';
import { useState } from 'react';

const Button = props => {
  const [wasShown, setWasShown] = useState(false);

  if (props.showText && !wasShown) setWasShown(true);

  return (
    <div className="button" onClick={props.onClick}>
      <div className="symbol">{props.symbol}</div>
      <div
        className={`text${props.showText ? '' : ' hideText'}${
          !props.showText && !wasShown ? ' textWasShown' : ''
        }`}
      >
        {props.text}
      </div>
      <style jsx>
        {`
          .button {
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 26px;
            height: 30px;
            text-align: center;
            cursor: pointer;
            user-select: none;
            transition: 0.7s;
          }
          .button:hover {
            background-color: rgb(131, 166, 201);
          }
          .button:active {
            transform: scale(1.1);
            transition: 0.1s;
          }
          .symbol {
            margin: 0 7px 0 7px;
            line-height: 45px;
          }
          .text {
            display: inline-block;
            font-size: 14px;
            transition: 0.7s;
            animation: textAppear 0.7s linear;
          }
          .hideText {
            animation: textDisappear 0.7s linear;
            animation-fill-mode: forwards;
          }
          .textWasShown {
            display: none;
            animation: none;
          }
          @keyframes textAppear {
            0% {
              opacity: 0;
              font-size: 0;
            }
          }
          @keyframes textDisappear {
            100% {
              display: none;
              opacity: 0;
              font-size: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  symbol: PropTypes.any.isRequired,
  showText: PropTypes.bool.isRequired,
  text: PropTypes.string
};

Button.defaultProps = {
  text: ''
};

export default Button;
