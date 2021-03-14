import PropTypes from 'prop-types';
import { useState } from 'react';

import Options from './Options';

const Select = props => {
  const { options } = props;
  const selectedOption = options.includes(props.selectedOption) ? props.selectedOption : options[0];
  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleChangeOption = option => {
    setShowOptions(false);
    if (option === selectedOption) return;
    props.onOptionChanged(option);
  };

  return (
    <div className="select">
      <div className="title">{props.title}</div>
      <div className="selector" onClick={handleToggleOptions}>
        <div className="picker">
          <img className="arrow" src="/icons/arrowDown.webp" />
        </div>
        <div className="selectedItem">
          <div className="selectedItemText">{selectedOption}</div>
        </div>
      </div>
      <Options
        show={showOptions}
        options={props.options}
        selectedOption={selectedOption}
        onOptionChanged={handleChangeOption}
      />
      <style jsx>
        {`
          .select {
            width: 200px;
          }
          .title {
            text-align: center;
            margin-bottom: 7px;
          }
          .selector {
            height: 20px;
            cursor: pointer;
            user-select: none;
            cursor: pointer;
          }
          .picker {
            position: relative;
            transform: translate(0, -1px);
            display: inline-block;
            width: 20px;
            height: 100%;
            border-style: solid;
            border-width: 1px;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            background-color: #923d9c;
          }
          .arrow {
            max-width: 100%;
            max-height: 100%;
          }
          .selectedItem {
            display: inline-block;
            width: calc(100% - 20px);
            height: 100%;
            border-style: solid;
            border-width: 1px;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            background-color: #dcb3e1;
          }
          .selectedItemText {
            position: absolute;
            margin-left: 7px;
          }
        `}
      </style>
    </div>
  );
};

Select.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string,
  onOptionChanged: PropTypes.func
};

Select.defaultProps = {
  selectedOption: '',
  onOptionChanged: () => {}
};

export default Select;
