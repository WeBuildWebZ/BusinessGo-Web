import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeSelectedOption } from '../../actions/selectedOptions';

const SelectedOptionList = () => {
  const dispatch = useDispatch();
  const selectedOptions = useSelector(store => store.selectedOptions);
  const optionNames = Object.keys(selectedOptions);
  const list = [];

  optionNames.forEach(optionName =>
    list.push(
      ...selectedOptions[optionName].map(option => ({
        value: option,
        optionName
      }))
    )
  );

  const handleRemoveOption = (optionName, value) => {
    dispatch(removeSelectedOption(optionName, value));
  };

  return (
    <div className="root">
      {list.map(({ value, optionName }, i) => (
        <div className="optionContainer" key={i}>
          <div className="optionText">{value}</div>
          <img
            className="closeIcon"
            alt="closeIcon"
            src="icons/close.svg"
            onClick={() => handleRemoveOption(optionName, value)}
          />
        </div>
      ))}
      <style jsx>
        {`
          .root {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }

          .optionContainer {
            display: flex;
            height: 35px;
            background-color: #66686e;
            border-radius: 50px;
          }

          .optionText {
            float: left;
            margin: 5px 0 0 10px;
          }

          .closeIcon {
            float: right;
            justify-content: space-around;
            margin: 0 10px 0 15px;
          }
        `}
      </style>
    </div>
  );
};

export default SelectedOptionList;
