import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getLanguage } from './lang';

const Inputs = props => {
  const language = getLanguage(useSelector(store => store.language));

  const handleKeyPress = ({ key }) => {
    if (key !== 'Enter') return;
    props.onSubmit();
  };

  return (
    <>
      <input
        className="input text-cursor"
        type="text"
        placeholder={language.username}
        onChange={props.onChangeEmail}
        onKeyPress={handleKeyPress}
      />
      <input
        className="input text-cursor"
        type="password"
        placeholder={language.password}
        onChange={props.onChangePassword}
        onKeyPress={handleKeyPress}
      />
      <style jsx>
        {`
          .input {
            width: 300px;
            height: 60px;
            padding: 14px;
            font-size: 20px;
            color: #030303;
            outline: none;
            border-style: none;
            border-radius: 14px;
            margin: 14px;
            transition: 0.7s;
            animation: inputAppear 1.5s ease;
          }
          .input:hover {
            transform: scale(1.04);
            box-shadow: 0 0 1px 1px whitesmoke;
          }
          .input:focus {
            transform: scale(1.1);
            box-shadow: 0 0 2px 2px whitesmoke;
            transition: 0.1s;
          }
          @keyframes inputAppear {
            0% {
              width: 0;
              height: 0;
              opacity: 0;
            }
          }
          @media only screen and (max-width: 768px) {
            .input {
              width: 80%;
              height: 40px;
              font-size: 15px;
            }
          }
        `}
      </style>
    </>
  );
};

Inputs.propTypes = {
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Inputs;
