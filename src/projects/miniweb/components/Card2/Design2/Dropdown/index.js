import PropTypes from 'prop-types';
import { useState } from 'react';

import DropdownButton from './DropdownButton';

const Dropdown = props => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`dropdown${open ? ' open' : ''}`}>
      <DropdownButton title={props.title} open={open} onClick={() => setOpen(!open)} />
      {open && (
        <>
          <div className="beforeContent">{props.beforeContent}</div>
          <div className="content" style={{ padding: props.withoutPadding ? 0 : 21 }}>
            {props.children}
          </div>
          {props.additionalBlocks.map((additionalBlock, i) => (
            <div className="additional content" key={i}>
              {additionalBlock}
            </div>
          ))}
        </>
      )}
      <style jsx>
        {`
          .dropdown {
            width: 90%;
          }
          .dropdown.open {
          }
          .beforeContent {
            margin: 14px 0 14px 0;
          }
          .content {
            display: flex;
            flex-direction: column;
            border-radius: 20px;
            background-color: white;
            color: #383434;
            animation: showContent 0.1s linear;
          }
          .content.additional {
            margin-top: 14px;
          }
          @keyframes showContent {
            0% {
              opacity: 0;
              transform: translate(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  withoutPadding: PropTypes.bool,
  beforeContent: PropTypes.any,
  additionalBlocks: PropTypes.array
};

Dropdown.defaultProps = {
  beforeContent: '',
  withoutPadding: false,
  additionalBlocks: []
};

export default Dropdown;
