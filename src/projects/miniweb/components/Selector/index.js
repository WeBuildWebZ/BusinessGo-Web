import PropTypes from 'prop-types';
import { useState } from 'react';

import ArrowDown from '../../../../components/ArrowDown';

const Selector = props => {
  const [open, setOpen] = useState(false);

  return (
    <div className="selector">
      <div
        className="line"
        style={{ backgroundColor: props.color, boxShadow: `0 0 0.2px 0.2px ${props.color}` }}
      />
      <div className="container" onClick={() => setOpen(!open)}>
        <div className="titleAndSubtitle">
          <div className="title">{props.title}</div>
          {props.subtitle && open && <div className="subtitle">{props.subtitle}</div>}
        </div>
        <ArrowDown color={props.color} closed={!open} />
      </div>
      <div className={`children${open ? '' : ' closed'}`}>{props.children}</div>
      <style jsx>
        {`
          * {
            color: #686464;
          }
          .selector {
          }
          .line {
            width: 100%;
            height: 0.5px;
            border-radius: 50px;
          }
          .container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 7px 0 14px 0;
            cursor: pointer;
          }
          .titleAndSubtitle {
            display: flex;
            flex-direction: column;
          }
          .title {
            font-weight: bold;
          }
          .subtitle {
            font-size: 12px;
          }
          .arrow {
            width: fit-content;
            font-size: 32px;
            transform: rotate(180deg) translate(0, 50%);
          }
          .children {
            margin: 14px 0 14px 0;
          }
          .children.closed {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

Selector.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  color: PropTypes.string.isRequired,
  children: PropTypes.any
};

Selector.defaultProps = {
  children: '',
  subtitle: ''
};

export default Selector;
