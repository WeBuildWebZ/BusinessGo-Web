import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fieldShape } from '../../../utils/field';

const colors = [
  '#d80000',
  '#c8004f',
  '#8800a3',
  '#6300aa',
  '#4500a2',
  '#3e4cd6',
  '#2e70d5',
  '#0097ab',
  '#00806e',
  '#089e3e',
  '#56b137',
  '#a6c715',
  '#f8d000',
  '#ffaa00',
  '#f77e00',
  '#eb3600',
  '#5e4034',
  '#616161',
  '#455865',
  '#000000'
];

const ColorPicker = props => {
  const languageCode = useSelector(store => store.language);
  const fieldName = props.field.names[languageCode];

  useEffect(() => {
    if (!props.value) props.onChange(colors[5]);
  }, []);

  return (
    <div className="colorPicker">
      <div className="title">
        <h5>{fieldName}:</h5>
        <div className="exampleColor" style={{ backgroundColor: props.value }} />
      </div>
      <div className="colors">
        {colors.map((color, i) => (
          <div
            key={i}
            className="color"
            style={{ backgroundColor: color }}
            onClick={() => props.onChange(color)}
          />
        ))}
      </div>
      <style jsx>
        {`
          .colorPicker {
            margin: 14px;
          }
          .colors {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
          .color {
            width: 50px;
            height: 50px;
            cursor: pointer;
            transition: 0.7s;
          }
          .color:hover {
            transform: scale(1.1);
            z-index: 1;
          }
          .color:active {
            transform: scale(1.15);
            transition: 0.1s;
          }
          .color:first-child {
            border-top-left-radius: 7px;
          }
          .color:last-child {
            border-bottom-right-radius: 7px;
          }
          .title {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 7px;
          }
          .exampleColor {
            flex: 1;
            height: 30px;
            border-radius: 14px;
            margin: 0 7px 0 7px;
            transition: 0.2s;
          }
        `}
      </style>
    </div>
  );
};

ColorPicker.propTypes = {
  value: PropTypes.string,
  field: fieldShape.isRequired,
  onChange: PropTypes.func
};

ColorPicker.defaultProps = {
  value: '',
  onChange: () => {}
};

export default ColorPicker;
