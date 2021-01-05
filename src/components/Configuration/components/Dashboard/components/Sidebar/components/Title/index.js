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
            text-align: center;
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
