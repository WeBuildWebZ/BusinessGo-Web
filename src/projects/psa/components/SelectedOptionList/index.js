import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SelectedOptionList = () => {
  const dispatch = useDispatch();
  const selectedOptions = useSelector(store => store.selectedOptions);
  const optionNames = Object.keys(selectedOptions);
  const list = [];

  optionNames.forEach(optionName => list.push(...selectedOptions[optionName]));

  return (
    <div className="root">
      {list.map((option, i) => (
        <div className="optionContainer" key={i}>
          <div className="optionText">{option}</div>
          <img className="closeIcon" alt="closeIcon" src="icons/close.svg" />
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
