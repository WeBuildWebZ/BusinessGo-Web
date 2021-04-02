import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const SelectButtons = props => {
  const languageCode = useSelector(store => store.language);

  const handleSelectOption = option => {
    props.onChange(option);
  };

  return (
    <>
      {props.options.map((option, i) => {
        const isSelected = option.value === props.value;

        return (
          <div
            key={i}
            className={`option${isSelected ? ' selected' : ''}`}
            onClick={() => handleSelectOption(option.value)}
          >
            <div className="title">{option.language[languageCode].title}</div>
            <div className="description">{option.language[languageCode].description}</div>
          </div>
        );
      })}
      <style jsx>
        {`
          .option {
            display: flex;
            flex-direction: column;
            width: 90%;
            min-height: 100px;
            height: fit-content;
            margin: 15px 0 10px 5%;
            padding: 10px;
            background-color: skyblue;
            border-radius: 7px;
            user-select: none;
            cursor: pointer;
            transition: 0.7s;
          }
          .option:hover {
            transform: scale(1.05);
            box-shadow: 0 0 2px 1px rgb(219, 198, 198);
          }
          .option:active {
            transform: scale(1.12);
            transition: 0.1s;
          }
          .option.selected {
            border-style: solid;
            border-color: #333333;
            border-width: 1px;
          }
          .title {
            font-size: 20px;
            line-height: 25px;
          }
          .description {
            margin-top: 10px;
            font-size: 12px;
          }
        `}
      </style>
    </>
  );
};

SelectButtons.propTypes = {
  value: PropTypes.any,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      language: PropTypes.shape({
        en: PropTypes.shape({ title: PropTypes.string, description: PropTypes.string }),
        es: PropTypes.shape({ title: PropTypes.string, description: PropTypes.string })
      })
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired
};

SelectButtons.defaultProps = {
  value: ''
};

export default SelectButtons;
