import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { isInViewport } from '../../utils/html';

const Appear = ({ children }) => {
  useEffect(() => {
    const handleScroll = () => {};

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

Appear.propTypes = {
  children: PropTypes.any.isRequired
};

export default Appear;
