import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getLanguage } from './lang';

const Back = props => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="backContainer" onClick={props.onClick} style={props.style}>
      <img className="backIcon" src="/shared/icons/back.png" alt="backIcon" />
      <div className="backText">{language.back}</div>
      <style jsx>
        {`
          .backContainer {
            width: fit-content;
            cursor: pointer;
            user-select: none;
          }
          .backIcon {
            width: 20px;
          }
          .backText {
            display: inline-block;
            font-size: 16px;
            font-weight: 900;
            margin-left: 1px;
            height: 100%;
          }
        `}
      </style>
    </div>
  );
};

Back.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func
};

Back.defaultProps = {
  style: {},
  onClick: () => {}
};

export default Back;
