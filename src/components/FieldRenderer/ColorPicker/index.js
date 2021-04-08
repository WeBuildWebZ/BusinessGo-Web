import PropTypes from 'prop-types';
import * as baseColors from '@material-ui/core/colors';
import { useSelector } from 'react-redux';

import { fieldShape } from '../../../utils/field';

const colors = Object.keys(baseColors)
  .filter(key => key !== 'common')
  .map(colorName => baseColors[colorName][700]);

const ColorPicker = props => {
  const languageCode = useSelector(store => store.language);
  const fieldName = props.field.names[languageCode];

  console.log(props.value);

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
