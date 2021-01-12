import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { setUser } from '../shared/actions/user';
import { getSessions } from '../services/api/session';

import LoadingPage from './LoadingPage';

const EnsureLoaded = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector(_ => _.user);

  useEffect(() => {
    getSessions().then(({ data }) => {
      if (!data.length) return (window.location.href = process.env.LANDING_URL);
      dispatch(setUser(data[0].user));
    });
  }, [dispatch]);

  return user ? <>{children}</> : <LoadingPage />;
};

EnsureLoaded.propTypes = {
  children: PropTypes.element.isRequired
};

export default EnsureLoaded;
