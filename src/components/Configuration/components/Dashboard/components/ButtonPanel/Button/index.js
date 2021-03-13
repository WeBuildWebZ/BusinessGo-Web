import PropTypes from 'prop-types';
import { OverlayTrigger } from 'react-bootstrap';

import AspectRatioKeeper from '../../../../../../AspectRatioKeeper';

import Tooltip from './Tooltip';

const Button = props => (
  <AspectRatioKeeper style={{ margin: '10px' }}>
    <Tooltip
      {...props}
      style={{
        background: 'blue',
        padding: 5,
        boxShadow: '0 0 2px 2px blue'
      }}
    >
      <div className="button" onClick={props.onClick}>
        {props.icon && <img src={props.icon} className="icon" />}
      </div>
    </Tooltip>
    <style jsx>
      {`
        .button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background-color: #ffffff;
          border-radius: 5px;
          cursor: pointer;
          user-select: none;
          transition: 0.2s;
          background: #ebebeb;
        }
        .button:hover {
          border-radius: 0.5em;
          box-shadow: 0 0 0.3em 1px grey;
          transform: rotate(15deg);
        }
        .icon {
          width: 25px;
          height: 25px;
        }
      `}
    </style>
  </AspectRatioKeeper>
);

Button.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  icon: '',
  text: '',
  onClick: () => {}
};

export default Button;
