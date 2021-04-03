import PropTypes from 'prop-types';
import { useState } from 'react';

const Checkbox = props => {
  const [checked, setChecked] = useState(props.defaultChecked);

  const handleChange = event => {
    if (props.blocked) return;
    setChecked(!checked);
    props.onChange(!checked);
  };

  return (
    <div className={`checkbox${checked ? '' : ' disabled'}`} onClick={handleChange}>
      <div className="pointContainer">
        <div className={`point${checked ? '' : ' disabled'}`} />
      </div>
      <div className="text">{props.text}</div>
      <style jsx>
        {`
          .checkbox {
            display: flex;
            flex-direction: row;
            transform: scale(1.05) translate(2.5%);
            width: fit-content;
            margin: 14px;
            padding: 7px;
            border-radius: 14px;
            background-color: limegreen;
            box-shadow: 0 0 1px 1px limegreen;
            cursor: pointer;
            user-select: none;
            transition: 0.7s;
          }
          .checkbox.disabled {
            background-color: grey;
            color: whitesmoke;
            box-shadow: unset;
            transform: unset;
          }
          .checkbox:active {
            transform: scale(1.08) translate(4%);
            transition: 0.1s;
          }
          .pointContainer {
            position: relative;
            width: 50px;
            height: 25px;
            margin-right: 7px;
            border-radius: 14px;
            border-style: solid;
            border-width: 1px;
          }
          .point {
            position: absolute;
            transform: translate(-100%);
            left: 95%;
            top: 5%;
            width: 40%;
            height: 80%;
            background-color: #303030;
            border-radius: 50px;
            transition: 0.7s;
          }
          .point.disabled {
            left: 5%;
            transform: translate(0);
            background-color: whitesmoke;
          }
        `}
      </style>
    </div>
  );
};

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  blocked: PropTypes.bool.isRequired
};

Checkbox.defaultProps = {
  defaultChecked: false
};

export default Checkbox;
