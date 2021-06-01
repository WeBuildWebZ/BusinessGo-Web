import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import ArrowDown from '../../../../components/ArrowDown';
import Overlay from '../../../../components/Overlay';

import { getLanguage } from './lang';

const SelectInput = props => {
  const language = getLanguage(useSelector(store => store.language));
  const [value, setValue] = useState('');

  return (
    <div className="selectInput" style={props.style}>
      <div className="container">
        <div className="title">{props.name}:</div>
        <div className="value">{value || language.select}</div>
      </div>
      <ArrowDown color={props.color} closed />
      <style jsx>
        {`
          * {
            color: #686464;
          }
          .container {
            display: flex;
            flex-direction: column;
          }
          .title {
            font-weight: bold;
          }
          .selectInput {
            display: flex;
            flex-direction: row;
            width: fit-content;
            user-select: none;
            cursor: pointer;
          }
          .value {
          }
        `}
      </style>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  options: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string, value: PropTypes.string })).isRequired
};

SelectInput.defaultProps = {
  name: '',
  color: '',
  style: {}
};

export default SelectInput;
