import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getLanguage } from './lang';

const SubmitButton = props => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className={`button${props.disabled ? ' loading' : ''}`} onClick={props.onClick}>
      {language.login}
      <style jsx>
        {`
          .button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 60px;
            margin: 14px;
            font-size: 30px;
            background-color: #ff044c;
            border-radius: 14px;
            user-select: none;
            transition: 0.7s;
          }
          .button:hover {
            transform: scale(1.04);
            box-shadow: 0 0 1px 1px #ff044c;
          }
          .button:active {
            transform: scale(1.1);
            box-shadow: 0 0 2px 2px #ff044c;
            transition: 0.1s;
          }
          .button.loading {
            opacity: 0.4;
          }
        `}
      </style>
    </div>
  );
};

SubmitButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SubmitButton;
