import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import getLanguage from './lang';

const Title = props => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="title">
      {language[props.code]}
      <style jsx>
        {`
          .title {
            font-size: 19px;
            text-align: center;
            margin-top: 8px;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

Title.propTypes = {
  code: PropTypes.string.isRequired
};

export default Title;
