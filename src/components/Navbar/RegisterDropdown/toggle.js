import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import getLanguage from './lang';

const Toggle = React.forwardRef(({ onClick }, ref) => {
  const languageCode = useSelector(store => store.language);
  const language = getLanguage(languageCode);

  return (
    <a
      href="/"
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {language.title}
      &#x25bc;
    </a>
  );
});

Toggle.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Toggle;
