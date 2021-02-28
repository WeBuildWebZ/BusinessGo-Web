import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { setUser } from '../shared/actions/user';
import { getSessions } from '../services/api/session';

import LoadingPage from './LoadingPage';

const EnsureLoggedIn = ({ children, redirectTo, Loading }) => {
  const dispatch = useDispatch();
  const session = useSelector(store => store.session);

  if (!session) return <Loading />;
  if (!session.user) {
    if (!process.browser) return <div />;
    window.location.href = redirectTo;
    return <div />;
  }

  return <>{children}</>;
};

EnsureLoggedIn.propTypes = {
  children: PropTypes.any.isRequired,
  redirectTo: PropTypes.string.isRequired
};

export default EnsureLoggedIn;
